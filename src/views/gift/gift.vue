<template>
    <div class="gift">
        <div class="header">
            <PopupIcon class="popup"></PopupIcon>
            <h1>Arkadaşlarınıza Netflix'ten bahsedin.</h1>
        </div>
        <div class="links">
            <div class="header-links">
                <h2>Bu bağlantıyı arkadaşlarınızla paylaşın, en sevdiğiniz dizi ve filmlerin keyfini onlar da çıkartsın.</h2>
            </div>
            <div class="allitem">

            <div class="inButton">
                <input type="text" class="link-input" name="" value="https://www.netflix.com/t/y/s3943n45-3243j2523" readonly>
                <button class="conc">Bağlantıyı Kopyala</button>
            </div>
            
            <h3>Veya</h3>
            <div class="icons">
                <div class="icon-cont">
                    <MailIcon class="mail iconsvg fonk"></MailIcon>

                </div>
                <div class="icon-cont">
                <WpIcon class="wp iconsvg fonk"></WpIcon>

                </div>
                <div class="icon-cont">
                    <FacebookIcon class="facebok iconsvg fonk"></FacebookIcon>

                </div>
                <div class="icon-cont">

                    <TwitterIcon class="twitter iconsvg fonk"></TwitterIcon>
                </div>
                <div class="icon-cont">

                    <MessIcon class="mess iconsvg fonk"></MessIcon>
                </div>
            
        
            
        
            
        
            
        
            </div>
        </div>
            </div>
        <div class="howWork">
            <h3>NASIL ÇALIŞIR?</h3>
            <div class="threeth">
                <div class="one">
                    <ShareIcon class="iconsvg sized"></ShareIcon>
                    <div class="outl">
                        <h4>1. Adım</h4>
                        <p>Bağlantıyı kopyalayarak ya da simgelerden birini seçerek bağlantıyı arkadaşlarınızla paylaşın.</p>
                    </div>
                </div>
                <ArrowIcon class="iconsvg sized"></ArrowIcon>
                <div class="two">
                    <NewsIcon class="iconsvg sized"></NewsIcon>
                    <div class="outl">
                    <h4>2. Adım</h4>
                        <p>Bir arkadaşınız kaydolduğunda size haber vereceğiz.</p>

                    </div>
                </div>
                <ArrowIcon class="iconsvg" ></ArrowIcon>
                <div class="thrr">
                    <PopupIcon class="iconsvg sized"></PopupIcon>
                    <div class="outl">
                    <h4>3. Adım</h4>
                        <p>Dilediğiniz kadar arkadaşınızla ve akrabanızla paylaşabilirsiniz.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopupIcon from '@/icons/popup.svg'
import MailIcon from '@/icons/mail.svg'
import WpIcon from '@/icons/wp.svg'
import FacebookIcon from '@/icons/facebook.svg'
import TwitterIcon from '@/icons/twitter.svg'
import MessIcon from '@/icons/mess.svg'
import ShareIcon from '@/icons/share.svg'
import NewsIcon from '@/icons/newsp.svg'
import ArrowIcon from '@/icons/arrow.svg'
    export default {
        name:"Gift",
        components:{
            PopupIcon,
            MailIcon,
            WpIcon,
            FacebookIcon,
            TwitterIcon,
            MessIcon,
            ShareIcon,
            NewsIcon,
            ArrowIcon
        }
    }
</script>

<style scoped>
.gift{
    background-color: aliceblue !important;
    width: 100%;
    min-height:90vh ;
    padding: 1rem 1rem;
    color: black;
    
    }
.header{
    margin: 0 auto;
    width: 1025px;
    margin-bottom:32px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent !important;
    border-bottom:1px solid grey;
}
.popup{
    width: 43px;
    height:42px;
}
.links{
    background-color:rgb(188, 181, 181,.5) ;
    margin: 0 auto;
    width: 1025px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    margin-bottom:2rem;
}
.header-links{
    margin-bottom: 2rem;
}
.header-links h2{
    font-weight: 400;
    
}
.inButton{
    position: relative;
    background-color: darksalmon;
    width: 40%;
    height: 2rem;
    display: flex;
    align-items: center;
}
.link-input{
    position: relative;
    width: 100%;
    height: 2rem;
    padding-left: 1rem;
}
.conc{
    width: 6rem;
    height: 90%;
    color: white;
    font-size: .7rem;
    border-radius: 4px;
    padding:0 1rem;
    background-color: red;
    position: absolute;
    right: 0;
}
.allitem{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.allitem h3 {
    font-weight: 200;
}
.iconsvg{
    width: 24px;
    height: 24px;
    
}
.fonk{
    cursor: pointer;
}
.allitem .icons{
    display: flex;
    width: 50%;
}
.icon-cont{
    width: 20%;
    text-align: center;
    border-left: 1px solid grey;
}
.icon-cont:last-child{
    border-right: 1px solid grey;
}

.howWork{
    margin: 0 auto;
    width: 1025px;
    
}
.howWork h3{
    font-weight: 200;
    margin-bottom: 1rem;
}
.threeth{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.one{
    
    width: 40%;
    height: 5.5rem;
    display: flex;
    flex-direction: row;
    background-color:rgb(188, 181, 181,.5) !important;
}
.two{
    width: 40%;
    height: 5.5rem;
    display: flex;
    flex-direction: row;
    background-color:rgb(188, 181, 181,.5) !important;
}
.thrr{
    width: 40%;
    height: 5.5rem;
    display: flex;
    flex-direction: row;
    background-color:rgb(188, 181, 181,.5) !important;
}
.outl{
    margin-left:1rem;
    margin-top:.5rem ;
}
.outl p{
    font-size: .7rem;
}
.sized{
    width: 64px;
    margin-top:.5rem ;
}
</style>