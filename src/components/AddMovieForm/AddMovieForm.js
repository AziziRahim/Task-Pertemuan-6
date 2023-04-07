import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return (
        <div className={styles.container}>
            <section className={styles.addmovieform}>
                <div className={styles.addmovieform__left}>
                    <img 
                        className={styles.addmovieform__image}
                        src="https://picsum.photos/550/400"
                        alt=""
                        />
                </div>
                <div className={styles.addmovieform__right}>
                    <form className={styles.addmovieform__form} action="/handlesubmit">
                        <h2 className={styles.addmovieform__top}>Add Movie</h2>
                        <label className={styles.addmovieform__title}for="Title">Title</label><br />
                        <input className={styles.addmovieform__boxtitle}type="text" id="title" name="title" /><br/>
                        <label className={styles.addmovieform__year}for="Year">Year</label><br />
                        <input className={styles.addmovieform__boxyear}type="text" id="Year" name="Year" /><br />
                        <input className={styles.addmovieform__button} type="submit" value="Submit" />
                    </form>
                </div>

        
        </section>
        </div>

                
        
               
        
    );
}

export default AddMovieForm;
