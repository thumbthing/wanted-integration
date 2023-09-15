import Link from 'next/link';
import './Header.style.css';

function Header() {
  return (
    <div className="header-container">
      <div className="navigate-box">
        <Link href="/todo">
          <button type="button" className="navigate-button">
            Todo List
          </button>
        </Link>
      </div>
      <div className="navigate-box">
        <Link href="/react-issue">
          <button type="button" className="navigate-button">
            React Issue
          </button>
        </Link>
      </div>
      <div className="navigate-box">
        <Link href="/clinical-trial" className="navigation-text">
          <button type="button" className="navigate-button">
            Clinical Trial
          </button>
        </Link>
      </div>
      <div className="navigate-box">
        <Link href="/mockdata-graph" className="navigation-text">
          <button type="button" className="navigate-button">
            Mock Data Graph
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
