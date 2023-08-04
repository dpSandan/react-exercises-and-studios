export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://images-na.ssl-images-amazon.com/images/I/616sDa2ATGL._AC_UL600_SR600,600_.jpg";
   let book2 = "https://assets.blogs.bsu.edu/wp-content/uploads/sites/25/2020/03/09153737/shining-683x1024.jpg";
   let book3 = "https://m.media-amazon.com/images/I/611iKJa7a-L._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The House of the Spirits" />
         <img src={book2} alt="The Shining" />
         <img src={book3} alt="The Name of the Wind" />
      </div>      
   );
}