const os = require('os');

function getNetworkIPs() {
  const interfaces = os.networkInterfaces();
  const ips = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push({
          name: name,
          address: iface.address
        });
      }
    }
  }

  return ips;
}

console.log('\n🌐 NETWORK ACCESS INFORMATION\n');
console.log('═'.repeat(60));

const ips = getNetworkIPs();

if (ips.length === 0) {
  console.log('❌ Tidak ada network interface yang ditemukan');
  console.log('   Pastikan PC terhubung ke jaringan WiFi atau LAN\n');
} else {
  console.log('✅ PC Anda dapat diakses dari jaringan lokal di:\n');
  
  ips.forEach((ip, index) => {
    console.log(`   ${index + 1}. ${ip.name}`);
    console.log(`      http://${ip.address}:3000\n`);
  });

  console.log('═'.repeat(60));
  console.log('\n📝 CARA MENGGUNAKAN:\n');
  console.log('   1. Jalankan: npm run dev:network');
  console.log('   2. Dari PC lain, buka browser dan akses salah satu URL di atas');
  console.log('   3. Pastikan kedua PC terhubung ke jaringan yang sama\n');
  console.log('⚠️  CATATAN:');
  console.log('   - Jika tidak bisa diakses, cek Windows Firewall');
  console.log('   - Lihat NETWORK_ACCESS.md untuk troubleshooting lengkap\n');
}
