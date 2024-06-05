import styles from './styles.module.css'; 

// simple component for yellow ribbon on top of navbar 

function RibbonBanner() {
    
    const click = () => {
        console.log('Yellow Ribbon Clicked'); 
    }

    return(
        <div className={styles.banner} onClick={ click }>
            <p>Discover Nature. Stay In Comfort.</p>
        </div>
    ); 
}

export default RibbonBanner; 