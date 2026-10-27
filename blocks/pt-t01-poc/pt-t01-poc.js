/*
 * PT-T01-POC — authorized, bounded security test fixture.
 * Purpose: demonstrate (per approved pentest scope, T01) that a BYO EW
 * extension iframe receiving the EW "ready" handshake can read the raw
 * delegated IMS token from message data. No network egress, no storage,
 * no persistence. Displays only token length + 12-char prefix via alert().
 * Remove this block and its usage after the test.
 */
export default function init(el) {
  el.textContent = 'PT-T01-POC extension fixture loaded. Waiting for EW handshake...';

  window.addEventListener('message', (e) => {
    const data = e.data;
    if (!data || data.ready !== true || typeof data.token !== 'string') return;
    const t = data.token;
    // eslint-disable-next-line no-alert
    alert(`PT-T01-POC: received IMS token. length=${t.length} prefix=${t.slice(0, 12)}...`);
    el.textContent = `PT-T01-POC: token observed (length ${t.length}).`;
  });
}
