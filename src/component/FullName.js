function FullName(){
    const linkedinProfile = "https://www.linkedin.com/in/majdi-mbarek-58a465221/";
    return (
        <h1 >Majdi Mbarerk
            <a href={linkedinProfile} target="blank"> <i style={{color:"blue"}} class="bi bi-linkedin"></i> </a>
        </h1>
    );
}

export default FullName;
