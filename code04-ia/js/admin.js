// Lógica simple para administrar ventas en el navegador (localStorage)
document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'ventas_demo';
  let ventas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

  const tbody = document.querySelector('#sales-table tbody');
  const btnNew = document.getElementById('btn-new');
  const modal = document.getElementById('form-modal');
  const form = document.getElementById('sale-form');
  const search = document.getElementById('search');

  function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(ventas)); }

  function render(filter = ''){
    tbody.innerHTML = '';
    const f = filter.trim().toLowerCase();
    ventas.forEach(v => {
      if (f && !(v.cliente.toLowerCase().includes(f) || v.producto.toLowerCase().includes(f))) return;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${v.id}</td>
        <td>${v.cliente}</td>
        <td>${v.producto}</td>
        <td>${v.cantidad}</td>
        <td>${v.precio}</td>
        <td>${v.fecha}</td>
        <td>
          <button class="btn-small action-edit" data-id="${v.id}">Editar</button>
          <button class="btn-small action-delete" data-id="${v.id}">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  function openModal(data){
    modal.classList.remove('hidden');
    document.getElementById('sale-id').value = data?.id || '';
    document.getElementById('cliente').value = data?.cliente || '';
    document.getElementById('producto').value = data?.producto || '';
    document.getElementById('cantidad').value = data?.cantidad || 1;
    document.getElementById('precio').value = data?.precio || 0;
    document.getElementById('fecha').value = data?.fecha || new Date().toISOString().slice(0,10);
    document.getElementById('form-title').textContent = data ? 'Editar venta' : 'Nueva venta';
  }

  function closeModal(){ modal.classList.add('hidden'); form.reset(); }

  btnNew.addEventListener('click', () => openModal());
  document.getElementById('cancel').addEventListener('click', closeModal);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('sale-id').value || Date.now().toString();
    const venta = {
      id,
      cliente: document.getElementById('cliente').value,
      producto: document.getElementById('producto').value,
      cantidad: Number(document.getElementById('cantidad').value),
      precio: Number(document.getElementById('precio').value),
      fecha: document.getElementById('fecha').value,
    };
    const idx = ventas.findIndex(v=>v.id===id);
    if (idx >= 0) ventas[idx] = venta; else ventas.push(venta);
    save(); render(search.value);
    closeModal();
  });

  tbody.addEventListener('click', (e) => {
    const id = e.target.dataset?.id;
    if (!id) return;
    if (e.target.classList.contains('action-delete')){
      ventas = ventas.filter(v=>v.id!==id); save(); render(search.value);
    } else if (e.target.classList.contains('action-edit')){
      const v = ventas.find(x=>x.id===id); openModal(v);
    }
  });

  search.addEventListener('input', ()=> render(search.value));

  // si no hay ventas, agregar ejemplo
  if (ventas.length===0){
    ventas.push({id: '1', cliente:'Juan', producto:'Camiseta', cantidad:2, precio:19.99, fecha:new Date().toISOString().slice(0,10)});
    ventas.push({id: '2', cliente:'María', producto:'Gorra', cantidad:1, precio:9.99, fecha:new Date().toISOString().slice(0,10)});
    save();
  }

  render();
});
