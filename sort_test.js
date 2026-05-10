const data = [
  {nama_produk: "Syar'i 5", badge: "Kilat"},
  {nama_produk: "Syar'i 4", badge: "Kilat"},
  {nama_produk: "Syar'i 3", badge: "Kilat"},
  {nama_produk: "Syar'i 2", badge: "Terlaris"},
  {nama_produk: "Syar'i 1", badge: "Kilat"}
];

let state_data = data.map((p, i) => ({...p, _original_index: i}));

let filtered = state_data;

filtered.sort((a, b) => {
    const isATerlaris = (a.badge || '').toLowerCase() === 'terlaris';
    const isBTerlaris = (b.badge || '').toLowerCase() === 'terlaris';
    if(isATerlaris && !isBTerlaris) return -1;
    if(!isATerlaris && isBTerlaris) return 1;
    return (a._original_index || 0) - (b._original_index || 0); 
});

console.log(filtered);
