import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Overlay } from './styles';
import { ReactComponent as Twitter } from '../../public/icons/twitter.svg';

export function LevelUpModal() {
  const { level, challengesCompleted, totalExperience, closeLevelUpModal } =
    useContext(ChallengesContext);

  const twitterUrl = encodeURIComponent(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/thumbnail.png?level=${String(
      level
    )}&challenges=${String(challengesCompleted)}&experience=${String(
      totalExperience
    )}`
  );

  return (
    <Overlay>
      <div className="container">
        <div>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>

        <footer>
          <button type="button">
            <a
              target="_blank"
              href={`https://twitter.com/intent/tweet?url=${twitterUrl}`}
              rel="noreferrer"
            >
              Compartilhar no Twitter <Twitter />
            </a>
          </button>
        </footer>
      </div>
    </Overlay>
  );
}
