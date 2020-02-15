/**
 * @description Main container will display on homepage with a more complex component structure to test out our accessability bar
 */

 import React, { Component } from 'react';

 class MainContainer extends Component {
   render() {
     return (
       <main id='homepage-main'>
          <Sidebar />
          <MainContent />
          <Footer />
       </main>
     )
   }
 }

 const Sidebar = (props) => {
   return (
     <section id='sidebar'>
       <h1>This is a Sidebar</h1>
       <p>Fromage say cheese mozzarella. Monterey jack fromage st. agur blue cheese when the cheese comes out everybody's happy melted cheese edam cheesecake camembert de normandie.</p>
       <h2>SubHeading</h2>
       <p>Babybel cheese on toast boursin cow hard cheese pepper jack smelly cheese say cheese. Croque monsieur cheese strings cauliflower cheese.</p>
       <h2>Another SubHeading</h2>
       <p>Gouda mascarpone gouda. Croque monsieur babybel cheese strings paneer cut the cheese squirty cheese hard cheese macaroni cheese. Cut the cheese fromage boursin stinking bishop roquefort bavarian bergkase fromage frais pepper jack.</p>
     </section>
   )
 }

 const MainContent = (props) => {
   const articleList = [];
   for (let i = 0; i < 5; i += 1) {
     articleList.push(<Article key={i} />)
   }
   return (
     <section id='main-content'>
       {articleList}
     </section>
   )
 }

 const Article = (props) => {
   return (
     <article className='article'>
        <div className='article-header'>
          <img className='article-img' src='https://static.toiimg.com/photo/69712708.cms' alt='cheese'></img>
          <div>
            <h1>Article Title</h1>
            <h3>Author of this Article</h3>
          </div>
        </div>
        <p>Lancashire pepper jack caerphilly. Taleggio swiss camembert de normandie mascarpone pecorino monterey jack pepper jack queso. Fromage cheese triangles fromage cheeseburger smelly cheese mascarpone squirty cheese cauliflower cheese. Cheese and wine bavarian bergkase cheeseburger cheesy grin emmental boursin.</p>
     </article>
   )
 }

 const Footer = (props) => {
   return (
     <footer id='footer'>
       <h2>This is a footer</h2>
       <ul>
         <li>Information</li>
         <li>More info!!</li>
         <li>Even More.</li>
         <li>Okay Last bit</li>
       </ul>
     </footer>
   )
 }

 export default MainContainer;