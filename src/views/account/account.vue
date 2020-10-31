<template>
    <div class="account">
        <div class="header-ac">
            <div class="account-head">
                <h1>Hesap</h1>
            </div>
            <div class="mem-pay">
                <div class="cancel">
                    <div class="cancel-buttons">
                        <h3>ÜYELİK VE ÖDEMELER</h3>
                        <button class="canc-mem">Üyeliği İptal Et</button>
                    </div>
                    <div class="frbordr">                    
                <div class="infor">
                    <div class="mail">
                        <h2>canberk@gmail.com</h2>
                        <h3>Parola:********</h3>
                        <h3>Telofon:5492937643</h3>
                    </div>
                </div>
                    <div class="links-mail">
                        <a href="">E-postayı değiştir</a>
                        <a href="">Paraolayı eğiştir</a>
                        <a href="">Telofon numarasını değiştir</a>
                    </div>
                </div>
                </div>
                <div class="pays">
                    <div class="mastercard">
                        <div class="card-indorma">
                            <h3>Sonraki faturalama tarihiniz: <span class="lastmanu">8 Kasım 2020.</span> </h3>
                            <div class="cards-number">
                                <MastercardIcon class="master-icon"></MastercardIcon>
                                <h3>•••• •••• •••• 9541</h3>

                            </div>
                        </div>
                        <div class="card-linsk">
                            <a href="">Ödeme bilgilerini güncelle</a>
                            <a href="">Fatura ayrıntıları</a>
                            <a href="">Fatura gününü değiştir</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="plans">
                <h1>PLAN AYRINTILARI</h1>
                <h2>Temel</h2>
                <a href="">Planı değiştir</a>
            </div>
            <div class="sett">
                <h1>AYARLAR</h1>
                <div class="sett-links">
                    <a href="">18+ İçeriklere Erişim PIN'i</a>
                    <a href="">Teste katılım</a>
                    <a href="">İçerik indirilen cihazları yönet</a>
                    <a href="">Cihaz etkinleştir</a>
                    <a href="">Bağlı cihazların yakın zamandaki izleme etkinliği</a>
                    <a href="">Tüm cihazlarda oturumu kapat</a>
                    <a href="">Kişisel bilgilerinizi indirin</a>
                </div>
            </div>

            <div class="profile-contrl">
                <div class="header-profikle-cont">
                    <h1>PROFİL VE EBEVEYN KONTROLLER</h1>
                </div>
                <div class="progfle-img">
                    <div class="ac-1">
                        <img src="https://occ-0-3727-300.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41" alt="">
                        <div class="info-kul">
                            <h2>canberk</h2>
                            <p>Tüm Yetişkinlik Düzeyleri</p>
                        </div>
                    </div>
                    <div class="ac-2">
                        <img src="https://occ-0-3727-300.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABeFXSmDt_7zPctWaOj9OOG64MrXgkcOUEFQgwJCAJM-SMgpHtk2uSKTaAvDXj2QAakUa-xe8xECEosuufp1Y5ArJpw.png?r=f71" alt="">
                        <div class="info-kul">
                            <h2>Diğerleri</h2>
                            <p>Tüm Yetişkinlik Düzeyleri</p>
                        </div>
                    </div>
                    <div class="ac-3">
                        <img src="https://occ-0-3727-300.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABdqT826jIxOSEYfpd8A8jQUz2swaIU2afge8kD4bCYIhMw_VDd-G9QxNUl99KU0-tcNya1vnjZmIbPHxhpET2CmcDg.png?r=8f0" alt="">
                        <div class="info-kul">
                            <h2>Çocuk</h2>
                            <p>Üst sınır 7+                 </p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MastercardIcon from '@/icons/mastercard.svg'
    export default {
        name:"Account",
        components:{
            MastercardIcon,
        }
    }
</script>

<style scoped>
.account{
    background-color: white !important;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
.header-ac{
    width: 60%;
    margin: 0 auto;
    margin-top:2rem
}
.account-head{
    margin-bottom:1rem;
    height: 3rem;
    border-bottom:1px solid grey;
}
.master-icon{
    width: 24px;
}

.mem-pay{
    display: flex;
    flex-direction: column;
    position: relative;
}
.cancel{
    display: flex;
    justify-content: space-between;
}
.frbordr{
    display: flex;
    justify-content: space-between;
    width: 64%;
    border-bottom: 2px solid grey;
    height: 6rem;
        
}
.cancel-buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.cancel-buttons h3{
    font-weight: 300;
    margin-bottom: 1rem;
    font-size: .9rem;
}
.canc-mem{
    background-color: rgb(188, 189, 189,.6);
    height: 2rem;
    width: 10rem;
    border-radius: 4px;

}
.canc-mem:hover{
    background-color: rgb(221, 223, 223);
}
.mail{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
} 
.mail h2{
    font-weight: 600;
    font-size: 1rem;
    margin-bottom:.5rem;
}
.mail h3{
    font-weight: 250;
    margin-bottom:.5rem;

}
.links-mail{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: .5rem;
}
a{
    text-decoration: dashed;
    color:rgb(0, 0, 255,.8) !important;
}
.pays{
    margin-bottom: 2rem;
    margin-top: 2rem;
    margin-left: 90px;
    width: 600px;
    display: flex;
}
.mastercard{
    border-bottom: 2px solid grey;
    width: 100%;
    margin-right: 10rem;
    display: flex;
    justify-content: space-between;
}

.card-indorma h3{
    font-weight: 500;
}
.cards-number{
    display: flex;
    width: 50%;
    justify-content: space-between;
}
.card-linsk{
    display: flex;
    flex-direction: column;
}
.lastmanu{
    font-weight: 800;
}
.plans{
    display: flex;
    height: 5rem;
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
    justify-content: space-between;
    padding-top: 1rem;
}
.plans h1{
    font-weight: 500;
    font-size: 1rem;
}
.plans h2{
    font-weight: 600;
    font-size: 1rem;
}
.sett{
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid grey;
}
.sett-links{
    display: flex;
    flex-direction: column;
}
.sett h1{
    font-weight: 500;
    font-size: 1rem;
}
.profile-contrl{
    display: flex;
    margin-bottom: 4rem;

}
.header-profikle-cont{
    width: 30%;
}
.header-profikle-cont h1{
    font-weight: 500;
    font-size: 1rem;
}
.progfle-img{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.ac-1{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    align-items: center;
    border-bottom: 1px solid grey;
}
.info-kul h2{
    font-weight: 600;
    font-size: 1rem;
}
.info-kul p{
    font-size: .7rem;
}

.ac-2{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    align-items: center;
    border-bottom: 1px solid grey;
}
.ac-3{
    
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    height: 6rem;
    align-items: center;
    border-bottom: 1px solid grey;
}
.ac-3 img{
    
}

.ac-3 .info-kul{
    margin-right:5rem;
}

img{
    width: 60px;
    height: 60px;
}

@media (min-width: 1200px){
    .pays{
        margin-left:21rem;
    }
    
}
</style>