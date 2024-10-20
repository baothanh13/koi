import Header from "../../../components/client/Header";
import Footer from "../../../components/client/Footer";
import globalShipping from "../../../assets/imgs/global_shipping.png";
import automation from "../../../assets/imgs/automation.png";
import ecommerce from "../../../assets/imgs/ecommerce.png";
import fast_delivery from "../../../assets/imgs/fast_delivery.png";
import home_delivery from "../../../assets/imgs/home_delivery.png";
import japanese from "../../../assets/imgs/japanese.png";
import tracking from "../../../assets/imgs/tracking.png";
import custom_clearance from "../../../assets/imgs/custom_clearance.png";
import cardService01 from "../../../assets/imgs/banner-service-01.png";
import cardService02 from "../../../assets/imgs/banner-service-02.png";
import cardService03 from "../../../assets/imgs/banner-service-03.png";
import cardService04 from "../../../assets/imgs/banner-service-04.png";
import logo_fed_ex from "../../../assets/imgs/logo_fed_ex.png";
import DHL from "../../../assets/imgs/DHL.png";
import ups from "../../../assets/imgs/ups.png";
import nippon from "../../../assets/imgs/nippon.png";
import sagawa from "../../../assets/imgs/sagawa.png";
import sagawa02 from "../../../assets/imgs/sagawa_02.png";
import yamato from "../../../assets/imgs/yamato.png";
import jp_Holding from "../../../assets/imgs/jp_Holding.png";
import "./index.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="container-home-page">
        <div className="box-banner">
          <div className="box-title-banner">
            <h1 className="title-banner">
              Chúng tôi cam kết Xóa bỏ các rào cản về thương mại điện tử xuyên
              biên giới.
            </h1>
            <p className="description-title">
              Với tầm nhìn trở thành nhà hỗ trợ thương mại điện tử xuyên biên
              giới hàng đầu cho cả người mua và người bán, Ezbuy Japan nỗ lực
              mang đến các giải pháp thương mại điện tử xuyên biên giới toàn
              diện. Giải pháp của chúng tôi được xây dựng trên nền tảng công
              nghệ dẫn đầu, với kiến thức chuyên sâu và niềm đam mê phụng sự
              khách hàng, nhằm giúp doanh nghiệp khai thác tối đa tiềm năng tăng
              trưởng.
            </p>
            <div className="box-parameter">
              <div className="item-parameter">
                <p className="title-parameter">45.000+</p>
                <p className="sub-parameter">Người dùng mới</p>
              </div>
              <div className="item-parameter">
                <p className="title-parameter">417.000+</p>
                <p className="sub-parameter">Đơn đặt hàng</p>
              </div>
              <div className="item-parameter">
                <p className="title-parameter">19.000+</p>
                <p className="sub-parameter">Khách hàng đã đặt</p>
              </div>
              <div className="item-parameter">
                <p className="title-parameter">300+</p>
                <p className="sub-parameter">Tấn sản phẩm</p>
              </div>
            </div>
            <button className="discovery-now">Khám phá ngay</button>
          </div>
        </div>
        <div className="box-advantage">
          <p className="title-box-advantage">
            Tại sao bạn nên hợp tác với Ezbuy Japan?
          </p>
          <div className="box-item-advantage">
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={globalShipping}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Mua sắm & vận chuyển không biên giới
              </p>
              <p className="sub-card-advantage">
                Mua và đấu giá cả nước Nhật thông qua các sàn thương mại điện tử
                bất kể bạn ở đâu.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={automation}
                alt="global_shipping"
              />
              <p className="title-card-advantage">Thực hiện kho hàng tự động</p>
              <p className="sub-card-advantage">
                Không gian lưu trữ linh hoạt, đáp ứng yêu cầu về tốc độ xử lý.
                Cho phép thanh toán trọn gói theo tháng tiện lợi.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={ecommerce}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Mua sắm thỏa thích với dịch vụ bán buôn
              </p>
              <p className="sub-card-advantage">
                Mặc cả và mua sắm hàng Nhật số lượng lớn với giá rẻ nhất thị
                trường nhờ quan hệ đối tác lâu dài của Ezbuy Japan với các
                thương hiệu.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={tracking}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Theo dõi đơn hàng theo thời gian thực
              </p>
              <p className="sub-card-advantage">
                Theo dõi, cập nhật và xử lý các đơn hàng của bạn thông qua phần
                mềm công nghệ cao.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={japanese}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Tăng tốc thâm nhập thị trường Nhật Bản
              </p>
              <p className="sub-card-advantage">
                Dễ dàng tham gia vào thị trường thương mại điện tử Nhật Bản và
                phát triển kinh doanh với sự hỗ trợ từ A đến Z.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={fast_delivery}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Giao hàng ngay ngày hôm sau
              </p>
              <p className="sub-card-advantage">
                Giao hàng đến hơn 220 quốc gia và vùng lãnh thổ một cách dễ
                dàng, sử dụng các tùy chọn vận chuyển tiêu chuẩn và vận chuyển
                nhanh.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={custom_clearance}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Thông quan nhanh chóng & an toàn
              </p>
              <p className="sub-card-advantage">
                Số hóa thủ tục hải quan để tránh sai sót và làm cho toàn bộ quy
                trình hải quan trở nên an toàn, minh bạch và rõ ràng hơn ở tất
                cả các bước.
              </p>
            </div>
            <div className="item-advantage">
              <img
                className="img-card-advantage"
                src={home_delivery}
                alt="global_shipping"
              />
              <p className="title-card-advantage">
                Vận chuyển hàng không tận nơi
              </p>
              <p className="sub-card-advantage">
                Đảm bảo dịch vụ chất lượng cao với chi phí phải chăng nhờ vào
                mối quan hệ lâu năm với các hãng hàng không nổi tiếng.
              </p>
            </div>
          </div>
        </div>
        <div className="box-service">
          <p className="title-service">Dịch Vụ</p>
          <div className="box-list-service">
            <div className="card-item-service">
              <p className="index-card-service">01</p>
              <div className="content-card-service content-card-service-even">
                <p className="title-card-service">
                  Thương mại điện tử & Vận chuyển xuyên biên giới
                </p>
                <p className="sub-card-service">
                  Không cần biết tiếng Nhật, không cần tạo nhiều tài khoản mua
                  hàng và không cần sử dụng phương thức thanh toán phức tạp khi
                  mua sắm trên các trang thương mại điện tử ở Nhật. Thoát khỏi
                  các rào cản địa lý và mở ra một thế giới thị trường tiềm năng
                  thông qua giải pháp giao hàng quốc tế toàn diện của chúng tôi.
                </p>
              </div>
              <div className="banner-card-service">
                <img src={cardService01} alt="card-service-01" />
              </div>
            </div>
            <div className="card-item-service">
              <p className="index-card-service">02</p>
              <div className="banner-card-service">
                <img src={cardService02} alt="card-service-02" />
              </div>
              <div className="content-card-service content-card-service-odd">
                <p className="title-card-service">Vận chuyển xuyên biên giới</p>
                <p className="sub-card-service">
                  Ezbuy Japan cung cấp dịch vụ chuyển phát quốc tế bằng đường
                  hàng không và đường biển từ Nhật Bản đến hơn 220 quốc gia.
                  Chúng tôi có sẵn nhiều phương thức vận chuyển khác nhau và các
                  dịch vụ tùy chọn để đảm bảo giao hàng nhanh chóng, an toàn với
                  chi phí rẻ nhất. Với các giải pháp vận chuyển toàn tiện, Ezbuy
                  Japan tự tin có thể đáp ứng mọi nhu cầu vận chuyển của khách
                  hàng
                </p>
              </div>
            </div>
            <div className="card-item-service">
              <p className="index-card-service">03</p>
              <div className="content-card-service content-card-service-even">
                <p className="title-card-service">
                  Dịch vụ warehouse fulfillment
                </p>
                <p className="sub-card-service">
                  Quy trình xử lý hàng hóa chuyên nghiệp là điều cần thiết cho
                  bất kỳ doanh nghiệp nào. Ezbuy Japan mở ra con đường thành
                  công đơn giản nhất cho tất cả các doanh nghiệp bằng cách xử lý
                  nhanh gọn khâu hoàn thiện đơn hàng, từ lưu trữ hàng tồn kho an
                  toàn đến đóng gói và gửi đơn đặt hàng.
                </p>
              </div>
              <div className="banner-card-service">
                <img src={cardService03} alt="card-service-03" />
              </div>
            </div>
            <div className="card-item-service">
              <p className="index-card-service">04</p>
              <div className="banner-card-service">
                <img src={cardService04} alt="card-service-04" />
              </div>
              <div className="content-card-service content-card-service-odd">
                <p className="title-card-service">Bán hàng tại Nhật</p>
                <p className="sub-card-service">
                  Thương nhân nước ngoài có thể dễ dàng bán hàng trên các trang
                  thương mại điện tử nổi tiếng nhất ở Nhật Bản mà không gặp rào
                  cản ngôn ngữ, quy trình đăng ký tài khoản hay thiết lập gian
                  hàng phức tạp.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-partner">
          <p className="title-partner">Đối tác của chúng tôi</p>
          <div className="box-list-logo-partner">
            <div class="logo-partner">
              <img src={logo_fed_ex} alt="logo-fed-ex" />
            </div>
            <div class="logo-partner">
              <img src={DHL} alt="logo-DHL" />
            </div>
            <div class="logo-partner">
              <img src={jp_Holding} alt="jp-Holding" />
            </div>
            <div class="logo-partner">
              <img src={nippon} alt="nippon" />
            </div>
            <div class="logo-partner">
              <img src={sagawa} alt="sagawa" />
            </div>
            <div class="logo-partner">
              <img src={ups} alt="ups" />
            </div>
            <div class="logo-partner">
              <img src={yamato} alt="yamato" />
            </div>
            <div class="logo-partner">
              <img src={sagawa02} alt="sagawa02" />
            </div>
          </div>
        </div>
        <div className="box-blog"></div>
        <div className="box-banner-footer"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
