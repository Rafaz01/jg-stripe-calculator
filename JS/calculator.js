function calculate() {
  const price = parseFloat(document.getElementById('price').value) || 0;

  // Client pays 5% on top — Stripe's 2.9% + $0.30 comes out of that
  const total      = (price + 0.30) / (1 - 0.05);
  const stripeFee  = total * 0.05 + 0.30;
  const agencyFee  = total - price - stripeFee;
  const youReceive = total - stripeFee;

  const fmt = n => '$' + n.toFixed(2);

  document.getElementById('total').textContent        = fmt(total);
  document.getElementById('service').textContent      = fmt(price);
  document.getElementById('agency-fee').textContent   = '+' + fmt(agencyFee);
  document.getElementById('fixed-fee').textContent    = '+$0.30';
  document.getElementById('you-receive').textContent  = fmt(youReceive);
  document.getElementById('stripe-takes').textContent = fmt(stripeFee);

  const el = document.getElementById('total');
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
}

function copyAmount() {
  const val = document.getElementById('total').textContent;
  navigator.clipboard.writeText(val).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.textContent = '✓ COPIADO';
    setTimeout(() => btn.textContent = 'COPIAR', 1500);
  });
}
function resetCalc() {
  document.getElementById('price').value = '';
  document.getElementById('total').textContent = '$0.00';
  document.getElementById('service').textContent = '$0.00';
  document.getElementById('agency-fee').textContent = '+$0.00';
  document.getElementById('fixed-fee').textContent = '+$0.30';
  document.getElementById('you-receive').textContent = '$0.00';
  document.getElementById('stripe-takes').textContent = '$0.00';
}