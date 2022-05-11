
import { Routes,Route,  } from 'react-router-dom';
import './App.css';

import Home from './page/Home';
import Footer from './page/Footer';
import Product from './page/Product';
function App() {
  return (

<div className='app'>
<div class="sidebar">
    <div class="sidebar-logo">
        <img src="./images/Petslogo.png" alt="Comapny logo"/>
        <div class="sidebar-close" id="sidebar-close">
            <i class='bx bx-left-arrow-alt'></i>
        </div>
    </div>
    <div class="sidebar-user">
        <div class="sidebar-user-info">
            <img src="./images/tommi.jpg" alt="User picture" class="profile-image"/>
            <div class="sidebar-user-name">
                UserName
            </div>
        </div>
        <button class="btn btn-outline">
            <i class='bx bx-log-out bx-flip-horizontal'></i>
        </button>
    </div>

    <ul class="sidebar-menu">
        <li>
            <a href="/" class="">
                <i class='bx bx-home'></i>
                <span>TRANG CHỦ</span>
            </a>
        </li>
        <li>
            <a href="/product">
                <i class='bx bx-shopping-bag'></i>
                <span>QUẢN LÍ MẶT HÀNG</span>
            </a>
        </li>
        <li>
            <a href="account.html">
                <i class='bx bx-shopping-bag'></i>
                <span>QUẢN LÍ TÀI KHOẢN</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-chart'></i>
                <span>DANH MUC</span>
            </a>
        </li>
        <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
                <i class='bx bx-user-circle'></i>
                <span>TÀI KHOẢN</span>
                <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#">
                        Hồ sơ cá nhân
                    </a>
                </li>
                <li>
                    <a href="#">
                        Cài đặt tài khoản
                    </a>
                </li>
                <li>
                    <a href="#">
                        Kết nối khác
                    </a>
                </li>
            </ul>
        </li>
        <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
                <i class='bx bx-category'></i>
                <span>project</span>
                <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#">
                        list
                    </a>
                </li>
                <li>
                    <a href="#">
                        add project
                    </a>
                </li>
            </ul>
        </li>
        <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
                <i class='bx bx-category'></i>
                <span>e-commerce</span>
                <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#">
                        list product
                    </a>
                </li>
                <li>
                    <a href="#">
                        add product
                    </a>
                </li>
                <li>
                    <a href="#">
                        orders
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-mail-send'></i>
                <span>EMAIL</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-chat'></i>
                <span>HỖ TRỢ</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class='bx bx-calendar'></i>
                <span>LỊCH</span>
            </a>
        </li>
        <li class="sidebar-submenu">
            <a href="#" class="sidebar-menu-dropdown">
                <i class='bx bx-cog'></i>
                <span>CÀI ĐẶT</span>
                <div class="dropdown-icon"></div>
            </a>
            <ul class="sidebar-menu sidebar-menu-dropdown-content">
                <li>
                    <a href="#" class="darkmode-toggle" id="darkmode-toggle">
                        chế độ tối
                        <span class="darkmode-switch"></span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
   
</div>
<Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/product' element={<Product/>}/>

 </Routes>
 
</div>


 
  );
}

export default App;
