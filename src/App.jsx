import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <section className="counter-card" aria-labelledby="counter-title">
        <header className="card-header">
          <div className="brand-mark" aria-hidden="true">+</div>
          <div>
            <p className="eyebrow">Productivity tool</p>
            <h1 id="counter-title">Counter</h1>
          </div>
          <span className="status"><span />Active</span>
        </header>

        <div className="count-display">
          <span className="count-label">Current value</span>
          <p className="count" aria-live="polite">{count}</p>
        </div>

        <p className="helper-text">Use the controls below to update your count.</p>

        <div className="controls">
          <button className="control-button secondary" type="button" onClick={() => setCount((current) => current - 1)}>
            <span aria-hidden="true">−</span>
            <span>Decrease</span>
          </button>
          <button className="control-button reset" type="button" onClick={() => setCount(0)}>
            Reset
          </button>
          <button className="control-button primary" type="button" onClick={() => setCount((current) => current + 1)}>
            <span aria-hidden="true">+</span>
            <span>Increase</span>
          </button>
        </div>

        <footer className="card-footer">
          <span>Counter session</span>
          <span className="footer-dot" aria-hidden="true" />
          <span>Ready for input</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
