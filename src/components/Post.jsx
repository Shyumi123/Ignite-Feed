import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/shyumi123.png"
            alt="Profile Image"
          />
          <div className={styles.authorInfo}>
            <strong>Danilo Arrotéia</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 8h13" dateTime="2022-05-11 08:13:21">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p> 

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀</p>

        <p><a href=''>jane.design/doctorcare</a></p> 
         
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw </a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>
    </article>
  );
}