import Footer from './Footer';
import Header from './Header';
import MyIntro from './MyIntro';
import './index.css'

function MainContent(){
return(
    <>
    <main className='main-content-body'>
        <Header/>
        <MyIntro />
        <Footer/>
    </main>
    </>
)
}export default MainContent;