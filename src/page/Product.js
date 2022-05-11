import React from 'react'

 function Product() {
  return (
    <div class="main">
        <div class="main-header">
            <div class="mobile-toggle" id="mobile-toggle">
                <i class='bx bx-menu-alt-right'></i>
            </div>
            <div class="main-title">
                Quản lí thú cưng
            </div>
        </div>
        <div class="main-content">
            <div class="row">
                
            </div>

            <div class="row">
                <div class="col-12">
                 
                    <div class="box">
                        <div class="box-header">
                        <a href="product_create.html"><i class='bx bx-add-to-queue bx-sm'></i> Thêm thú cưng</a>
                        </div>
                        <div class="box-body overflow-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Danh mục thú cưng</th>
                                        <th>Ngày thêm</th>
                                        <th>Trạng Thái Vận Chuyển</th>
                                        <th>Thanh Toán</th>
                                        <th>Giá</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#2345</td>
                                        <td>
                                            <div class="order-owner">
                                                <img src="./images/user-image.jpg" alt="user image"/>
                                                <span>ahihi</span>
                                            </div>
                                        </td>
                                        <td>2021-05-09</td>
                                        <td>
                                            <span class="order-status order-ready">
                                                Sẵn sàng giao hàng
                                            </span>
                                        </td>
                                        <td>
                                            <div class="payment-status payment-pending">
                                                <div class="dot"></div>
                                                <span>Chưa thanh toán</span>
                                            </div>
                                        </td>
                                        <td>$123.45</td>
                                        <td>
                                            <div class="manage">
                                                <a href="#"><i class='bx bx-edit bx-md'></i></a>
                                                <a href="#"><i class='bx bx-trash bx-md'></i></a>
                                                </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#2345</td>
                                        <td>
                                            <div class="order-owner">
                                                <img src="./images/user-image-2.png" alt="user image"/>
                                                <span>John doe</span>
                                            </div>
                                        </td>
                                        <td>2021-05-09</td>
                                        <td>
                                            <span class="order-status order-shipped">
                                                Đã giao hàng
                                            </span>
                                        </td>
                                        <td>
                                            <div class="payment-status payment-paid">
                                                <div class="dot"></div>
                                                <span>Đã thanh toán</span>
                                            </div>
                                        </td>
                                        <td>$123.45</td>
                                        <td>
                                            <div class="manage">
                                            <a href="#"><i class='bx bx-edit bx-md'></i></a>
                                            <a href="#"><i class='bx bx-trash bx-md'></i></a>
                                            </div>
                                         </td>
                                    </tr>
                                    <tr>
                                        <td>#2345</td>
                                        <td>
                                            <div class="order-owner">
                                                <img src="./images/user-image-3.png" alt="user image"/>
                                                <span>evelyn</span>
                                            </div>
                                        </td>
                                        <td>2021-05-09</td>
                                        <td>
                                            <span class="order-status order-shipped">
                                                Đã giao hàng
                                            </span>
                                        </td>
                                        <td>
                                            <div class="payment-status payment-paid">
                                                <div class="dot"></div>
                                                <span>Đã thanh toán</span>
                                            </div>
                                        </td>
                                        <td>$123.45</td>
                                        <td>
                                            <div class="manage">
                                                <a href="#"><i class='bx bx-edit bx-md'></i></a>
                                                <a href="#"><i class='bx bx-trash bx-md'></i></a>
                                                </div>
                                         </td>
                                    </tr>
                                    <tr>
                                        <td>#2345</td>
                                        <td>
                                            <div class="order-owner">
                                                <img src="./images/user-image-2.png" alt="user image"/>
                                                <span>John doe</span>
                                            </div>
                                        </td>
                                        <td>2021-05-09</td>
                                        <td>
                                            <span class="order-status order-shipped">
                                                Đã giao hàng
                                            </span>
                                        </td>
                                        <td>
                                            <div class="payment-status payment-paid">
                                                <div class="dot"></div>
                                                <span>Đã thanh toán</span>
                                            </div>
                                        </td>
                                        <td>$123.45</td>
                                        <td>
                                            <div class="manage">
                                                <a href="#"><i class='bx bx-edit bx-md'></i></a>
                                                <a href="#"><i class='bx bx-trash bx-md'></i></a>
                                                </div>
                                         </td>
                                    </tr>
                                    <tr>
                                        <td>#2345</td>
                                        <td>
                                            <div class="order-owner">
                                                <img src="./images/user-image-3.png" alt="user image"/>
                                                <span>evelyn</span>
                                            </div>
                                        </td>
                                        <td>2021-05-09</td>
                                        <td>
                                            <span class="order-status order-shipped">
                                                Đã giao hàng
                                            </span>
                                        </td>
                                        <td>
                                            <div class="payment-status payment-paid">
                                                <div class="dot"></div>
                                                <span>Đã thanh toán</span>
                                            </div>
                                        </td>
                                        <td>$123.45</td>
                                        <td>
                                           <div class="manage">
                                            <a href="#"><i class='bx bx-edit bx-md'></i></a>
                                            <a href="#"><i class='bx bx-trash bx-md'></i></a>
                                            </div>
                                         </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
  )
}
export default Product
