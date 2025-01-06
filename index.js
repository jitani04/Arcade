import { useState } from 'react';
import Modal from 'C:/Users/Jenna Itani/Downloads/Arcade/src/components/Modal';
import Header from 'C:/Users/Jenna Itani/Downloads/Arcade/src/components/CustomHeader';

export default function Home() {
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const openCreateAccountModal = () => {
    setIsCreateAccountOpen(true);
  };

  const openSignInModal = () => {
    setIsSignInOpen(true);
  };

  const closeModal = () => {
    setIsCreateAccountOpen(false);
    setIsSignInOpen(false);
  };

  return (
    <div>
      <Header
        openCreateAccountModal={openCreateAccountModal}
        openSignInModal={openSignInModal}
      />
      
      {/* Game Content */}
      <main className="main-content">
        <div className="section-title">
          <h1>Game Center</h1>
          <select className="dropdown">
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="game-grid">
          <div className="game-card">
            <img src="/images/race-game-placeholder.jpg" alt="Race Game" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Snake Game</h2>
              <p className="game-description">Use arrow keys to control the snake. Try to eat the food to score points!</p>
              <a href="/Snake/snakegame.html" className="play-button-link">
                <button className="play-button">Play</button>
              </a>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Jump Game</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Pacman</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Tic-Tac-Toe</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div class="game-info">
              <h2 className="game-title">Coming Soon</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Coming Soon</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Coming Soon</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>

          <div className="game-card">
            <img src="/images/coming-soon.jpg" alt="Coming Soon" className="game-image" onError={(e) => e.target.src = '/images/default-placeholder.jpg'} />
            <div className="game-info">
              <h2 className="game-title">Coming Soon</h2>
              <p className="game-description">Stay tuned for new games coming your way!</p>
              <button className="play-button disabled" disabled>Coming Soon</button>
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {isCreateAccountOpen && (
        <Modal title="Create Account" closeModal={closeModal}>
          <form>
            <label>
              Email:
              <input type="email" required />
            </label>
            <label>
              Password:
              <input type="password" required />
            </label>
            <button type="submit">Create Account</button>
          </form>
        </Modal>
      )}

      {isSignInOpen && (
        <Modal title="Sign In" closeModal={closeModal}>
          <form>
            <label>
              Email:
              <input type="email" required />
            </label>
            <label>
              Password:
              <input type="password" required />
            </label>
            <button type="submit">Sign In</button>
          </form>
        </Modal>
      )}
    </div>
  );
}
