'use client'

import { useState } from 'react'
import { Upload, CheckCircle, XCircle, Loader, Copy, ExternalLink, Home } from 'lucide-react'
import Link from 'next/link'

export default function UploadPage() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadResults, setUploadResults] = useState<Array<{ filename: string; url: string; success: boolean }>>([])
  const [previews, setPreviews] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles(selectedFiles)
      setUploadResults([])
      
      // Create previews
      const previewUrls: string[] = []
      Array.from(selectedFiles).forEach(file => {
        const reader = new FileReader()
        reader.onloadend = () => {
          previewUrls.push(reader.result as string)
          if (previewUrls.length === selectedFiles.length) {
            setPreviews(previewUrls)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleUpload = async () => {
    if (!files || files.length === 0) return

    setUploading(true)
    setUploadResults([])

    const results: Array<{ filename: string; url: string; success: boolean }> = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      try {
        const response = await fetch(
          `/api/upload?filename=${encodeURIComponent(file.name)}`,
          {
            method: 'POST',
            body: file,
          }
        )

        const data = await response.json()

        if (response.ok) {
          results.push({ filename: file.name, url: data.url, success: true })
        } else {
          results.push({ filename: file.name, url: '', success: false })
        }
      } catch (error) {
        results.push({ filename: file.name, url: '', success: false })
      }
      
      setUploadResults([...results])
    }

    setUploading(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('URL copied!')
  }

  const copyAllUrls = () => {
    const urls = uploadResults.filter(r => r.success).map(r => r.url).join('\n')
    navigator.clipboard.writeText(urls)
    alert(`${uploadResults.filter(r => r.success).length} URLs copied!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-4">
            <Home size={20} />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
            <Upload className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Upload Gambar Produk
          </h1>
          <p className="text-lg text-gray-600">
            Upload gambar produk ke Vercel Blob Storage (Batch Upload)
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          {/* File Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Pilih Gambar (Multiple)
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer"
              />
            </div>
            {files && (
              <p className="mt-2 text-sm text-gray-600">
                {files.length} file(s) selected
              </p>
            )}
          </div>

          {/* Previews */}
          {previews.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preview ({previews.length} images)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-96 overflow-y-auto p-2">
                {Array.from(files || []).map((file, index) => (
                  <div key={index} className="relative">
                    <div className="relative w-full h-24 bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
                      <img
                        src={previews[index]}
                        alt={file.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-600 truncate" title={file.name}>{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)} KB</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!files || uploading}
            className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
              !files || uploading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl'
            }`}
          >
            {uploading ? (
              <>
                <Loader className="animate-spin" size={20} />
                <span>Uploading {uploadResults.length} / {files?.length || 0}...</span>
              </>
            ) : (
              <>
                <Upload size={20} />
                <span>Upload {files?.length || 0} Gambar</span>
              </>
            )}
          </button>
        </div>

        {/* Results */}
        {uploadResults.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Upload Results ({uploadResults.filter(r => r.success).length} / {uploadResults.length} success)
              </h3>
              {uploadResults.some(r => r.success) && (
                <button
                  onClick={copyAllUrls}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Copy size={16} />
                  <span>Copy All URLs</span>
                </button>
              )}
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {uploadResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    result.success
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {result.success ? (
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    ) : (
                      <XCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold mb-1 ${result.success ? 'text-green-900' : 'text-red-900'}`}>
                        {result.filename}
                      </p>
                      {result.success ? (
                        <div className="flex items-center space-x-2">
                          <code className="flex-1 text-xs bg-white p-2 rounded border border-green-300 overflow-x-auto">
                            {result.url}
                          </code>
                          <button
                            onClick={() => copyToClipboard(result.url)}
                            className="px-2 py-1 bg-green-600 text-white text-xs font-semibold rounded hover:bg-green-700 transition-colors flex-shrink-0"
                            title="Copy URL"
                          >
                            <Copy size={14} />
                          </button>
                          <a
                            href={result.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded hover:bg-blue-700 transition-colors flex-shrink-0"
                            title="Open in new tab"
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      ) : (
                        <p className="text-sm text-red-800">Upload failed - Check console for errors</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">📝 Cara Menggunakan</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
            <li>Pilih satu atau lebih gambar produk (bisa multiple select)</li>
            <li>Preview akan muncul untuk semua gambar yang dipilih</li>
            <li>Klik tombol "Upload" untuk upload semua gambar sekaligus</li>
            <li>Tunggu sampai semua gambar selesai diupload</li>
            <li>Copy URL yang dihasilkan (bisa copy satu-satu atau semua sekaligus)</li>
            <li>Gunakan URL tersebut di data produk Anda</li>
          </ol>
        </div>

        {/* Note */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mt-6">
          <h3 className="font-bold text-amber-900 mb-2">⚠️ Catatan Penting</h3>
          <ul className="list-disc list-inside space-y-1 text-amber-800 text-sm">
            <li>Pastikan Vercel Blob sudah dikonfigurasi di project Anda</li>
            <li>Environment variable <code className="bg-amber-100 px-2 py-1 rounded">BLOB_READ_WRITE_TOKEN</code> harus sudah di-set</li>
            <li>Ukuran file maksimal tergantung plan Vercel Anda</li>
            <li>Gunakan nama file yang konsisten (lowercase, no spaces)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
