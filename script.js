const form = document.getElementById('orderForm');
const tableBody = document.querySelector('#ordersTable tbody');

let orders = JSON.parse(localStorage.getItem('orders')) || [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const resource = document.getElementById('resource').value;
  const type = document.getElementById('type').value;
  const amount = parseInt(document.getElementById('amount').value);
  const price = parseFloat(document.getElementById('price').value);

  const order = { resource, type, amount, price };
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  renderOrders();
  form.reset();
});

function renderOrders() {
  tableBody.innerHTML = '';
  orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${order.resource}</td>
      <td>${order.type}</td>
      <td>${order.amount}</td>
      <td>${order.price.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
  });
}

renderOrders();