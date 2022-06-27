import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/shyumi123.png" alt="Avatar Photo" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Danilo Arrotéia</strong>
              <time title="11 de Maio ás 8h13" dateTime="2022-05-11 08:13:21">
                Cerca de 1h atrás.
              </time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
