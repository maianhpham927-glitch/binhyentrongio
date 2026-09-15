export const BLOGGER_THEME_XML = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsversion='3' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='utf-8'/>
  <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
  <title><data:view.title.escaped/></title>
  
  <b:include data='blog' name='all-head-content'/>

  <!-- Google Fonts: Lora, Playfair Display, Nunito, Dancing Script -->
  <link href='https://fonts.googleapis.com' rel='preconnect'/>
  <link crossorigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect'/>
  <link href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&amp;family=Lora:ital,wght@0,400;0,600;1,400;1,600&amp;family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400&amp;family=Playfair+Display:ital,wght@0,600;0,700;1,600&amp;display=swap' rel='stylesheet'/>

  <b:skin><![CDATA[
  /* ========================================================
     THEME: better and better - Mellifluous Blogspot Theme
     CONCEPT: Thanh xuân, Học đường, Ngôn tình, Mùa hè, Hoa anh đào
     AUTHOR: Mellifluous
     ======================================================== */
  :root {
    --bg-main: #fffafb;
    --bg-card: #ffffff;
    --bg-subtle: #fdf2f4;
    --text-main: #4a3b45;
    --text-muted: #8c7382;
    --accent-pink: #f472b6;
    --accent-pink-soft: #fce7f3;
    --accent-yellow: #fef08a;
    --accent-blue: #bae6fd;
    --accent-green: #bbf7d0;
    --border-color: #fbcfe8;
    --font-serif: 'Lora', Georgia, serif;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-script: 'Dancing Script', cursive;
    --font-sans: 'Nunito', system-ui, sans-serif;
    --shadow-soft: 0 10px 25px -5px rgba(244, 114, 182, 0.12), 0 8px 10px -6px rgba(244, 114, 182, 0.08);
  }

  body.dark-mode {
    --bg-main: #14111f;
    --bg-card: #1f1b2e;
    --bg-subtle: #2b253f;
    --text-main: #f3e8f1;
    --text-muted: #b8a6b5;
    --accent-pink: #f472b6;
    --accent-pink-soft: #3b2841;
    --accent-yellow: #fef08a;
    --accent-blue: #38bdf8;
    --accent-green: #4ade80;
    --border-color: #3f324d;
    --shadow-soft: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: var(--font-sans);
    line-height: 1.65;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  /* Sakura Petals Canvas */
  #sakura-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 99;
  }

  /* Top Navigation */
  .melli-nav {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 50;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  body.dark-mode .melli-nav {
    background: rgba(31, 27, 46, 0.88);
  }
  .nav-brand {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--accent-pink);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav-links {
    display: flex;
    list-style: none;
    gap: 18px;
    align-items: center;
  }
  .nav-links a {
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: var(--accent-pink);
  }
  .nav-actions {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .btn-icon {
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    border-radius: 9999px;
    width: 38px;
    height: 38px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  .btn-icon:hover {
    transform: scale(1.05);
    border-color: var(--accent-pink);
  }

  /* Container */
  .layout-container {
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 30px;
  }
  @media (max-width: 860px) {
    .layout-container {
      grid-template-columns: 1fr;
    }
  }

  /* Intro Card */
  .melli-intro-card {
    background: var(--bg-card);
    border: 1.5px dashed var(--border-color);
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 35px;
    position: relative;
    box-shadow: var(--shadow-soft);
    overflow: hidden;
  }
  .intro-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--accent-pink-soft);
    color: var(--accent-pink);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .intro-title {
    font-family: var(--font-display);
    font-size: 1.85rem;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--text-main);
  }
  .intro-subtitle {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    color: var(--accent-pink);
    margin-bottom: 16px;
    display: block;
    font-weight: 600;
  }
  .intro-desc {
    font-family: var(--font-serif);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 14px;
    color: var(--text-main);
  }
  .intro-note {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    padding: 12px 16px;
    background: var(--bg-subtle);
    border-left: 4px solid var(--accent-pink);
    border-radius: 0 12px 12px 0;
    color: var(--text-muted);
  }

  /* Letter Navigation (Lá thư tình bay bay) */
  .letters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  .letter-card {
    background: #fffdfa;
    border: 1px solid #f3e8d8;
    border-radius: 12px;
    padding: 22px 18px;
    position: relative;
    box-shadow: 0 8px 16px -4px rgba(0,0,0,0.06);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    text-decoration: none;
    color: #4a3b45;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 155px;
  }
  body.dark-mode .letter-card {
    background: #242036;
    border-color: #3f3657;
    color: #f3e8f1;
  }
  .letter-card:nth-child(1) { transform: rotate(-2.5deg); }
  .letter-card:nth-child(2) { transform: rotate(1.8deg); }
  .letter-card:nth-child(3) { transform: rotate(-1.5deg); }
  .letter-card:nth-child(4) { transform: rotate(2.2deg); }
  .letter-card:hover {
    transform: translateY(-8px) scale(1.03) rotate(0deg) !important;
    box-shadow: 0 16px 30px -6px rgba(244, 114, 182, 0.25);
  }
  .letter-stamp {
    position: absolute;
    top: 10px;
    right: 12px;
    font-size: 1.4rem;
  }
  .letter-tag {
    font-family: var(--font-script);
    font-size: 1.15rem;
    color: var(--accent-pink);
  }
  .letter-title {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 700;
    margin: 8px 0;
  }
  .letter-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  /* Story Post Cards */
  .story-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .story-item {
    background: var(--bg-card);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    padding: 20px;
    box-shadow: var(--shadow-soft);
    display: flex;
    gap: 20px;
  }
  @media (max-width: 600px) {
    .story-item { flex-direction: column; }
  }
  .story-thumb {
    width: 140px;
    height: 190px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
  }
  .story-title a {
    font-family: var(--font-display);
    font-size: 1.35rem;
    color: var(--text-main);
    text-decoration: none;
    font-weight: 700;
  }
  .story-title a:hover {
    color: var(--accent-pink);
  }

  /* Sidebar */
  .sidebar-widget {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: var(--shadow-soft);
  }
  .widget-title {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--accent-pink);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1.5px dashed var(--border-color);
    padding-bottom: 8px;
  }

  /* Dropdown selector for stories */
  .story-dropdown-select {
    width: 100%;
    padding: 10px 14px;
    border: 1.5px solid var(--border-color);
    border-radius: 10px;
    background: var(--bg-subtle);
    color: var(--text-main);
    font-family: var(--font-sans);
    font-size: 0.95rem;
    cursor: pointer;
    outline: none;
  }

  /* Footer */
  .melli-footer {
    background: var(--bg-card);
    border-top: 1px solid var(--border-color);
    padding: 40px 20px 30px;
    text-align: center;
    margin-top: 60px;
  }
  .footer-socials {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 18px;
  }
  .social-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-main);
    text-decoration: none;
    transition: all 0.2s;
  }
  .social-circle:hover {
    background: var(--accent-pink);
    color: #fff;
    transform: translateY(-3px);
  }

  /* Password Locker for Protected Chapters */
  .locked-chapter-box {
    background: var(--bg-subtle);
    border: 2px dashed var(--accent-pink);
    border-radius: 16px;
    padding: 30px 20px;
    text-align: center;
    margin: 25px 0;
  }
  .pass-input {
    padding: 10px 16px;
    border: 1.5px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    margin: 10px 0;
    max-width: 320px;
    width: 100%;
  }
  .pass-submit-btn {
    background: var(--accent-pink);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  }
  ]]></b:skin>
</head>

<body>
  <!-- Canvas Hoa Anh Đào Rơi -->
  <canvas id='sakura-canvas'></canvas>

  <!-- Top Navigation -->
  <header class='melli-nav'>
    <a class='nav-brand' expr:href='data:blog.homepageUrl'>
      <span>🌸</span> better and better
    </a>
    
    <nav>
      <ul class='nav-links'>
        <li><a expr:href='data:blog.homepageUrl'>Trang chủ</a></li>
        <li><a href='/search/label/Truyện đã hoàn thành'>Truyện hoàn</a></li>
        <li><a href='/search/label/Truyện chưa hoàn thành'>Đang tiến hành</a></li>
        <li><a href='/p/password.html'>Password</a></li>
        <li><a href='/p/gioi-thieu.html'>Giới thiệu</a></li>
      </ul>
    </nav>

    <div class='nav-actions'>
      <button class='btn-icon' id='btn-theme-toggle' title='Đổi giao diện Sáng / Tối'>🌙</button>
      <button class='btn-icon' id='btn-sakura-toggle' title='Bật / Tắt hoa anh đào rơi'>🌸</button>
      <form action='/search' class='search-form' method='get' style='display:inline;'>
        <input name='q' placeholder='Tìm truyện...' style='padding:6px 12px; border-radius:20px; border:1px solid var(--border-color); font-size:0.85rem; outline:none; background:var(--bg-subtle); color:var(--text-main);' type='text'/>
      </form>
    </div>
  </header>

  <!-- Main Container -->
  <div class='layout-container'>
    <main class='main-area'>
      
      <!-- Chỉ hiện ở Trang Chủ (Homepage) -->
      <b:if cond='data:view.isHomepage'>
        <!-- Box Giới Thiệu Chuẩn Yêu Cầu -->
        <section class='melli-intro-card'>
          <div class='intro-badge'>🌸 Mellifluous • better and better</div>
          <h1 class='intro-title'>Xin chào, tớ là Mellifluous</h1>
          <span class='intro-subtitle'>━ Một chiếc thuyền nhỏ lênh đênh ngược gió</span>
          <p class='intro-desc'>
            Đây là trang phụ của tớ, đăng linh ta linh tinh. Đăng truyện song song với trang chính, cập nhật muộn và không thường xuyên, phòng ngừa trang chính bị khóa
          </p>
          <div class='intro-note'>
            <em>Truyện trong nhà được chuyển ngữ dưới sự cho phép của tác giả với mục đích phi lợi nhuận, sẽ có mật khẩu để đảm bảo công sức của tác giả lẫn dịch giả.</em>
          </div>
        </section>

        <!-- Các mục chuyển hướng dạng Lá Thư Tình Bay Bay -->
        <section class='letters-grid'>
          <a class='letter-card' href='/search/label/Truyện đã hoàn thành'>
            <span class='letter-stamp'>📮</span>
            <div class='letter-tag'>Thư số 01</div>
            <div class='letter-title'>Truyện đã hoàn thành</div>
            <div class='letter-desc'>Những bản tình ca mùa hè trọn vẹn, yên tâm nhảy hố không sợ lọt hố!</div>
          </a>

          <a class='letter-card' href='/search/label/Truyện chưa hoàn thành'>
            <span class='letter-stamp'>💌</span>
            <div class='letter-tag'>Thư số 02</div>
            <div class='letter-title'>Truyện chưa hoàn thành</div>
            <div class='letter-desc'>Các bộ đang dịch, lịch ra chương cập nhật định kỳ mỗi tuần.</div>
          </a>

          <a class='letter-card' href='/p/password.html'>
            <span class='letter-stamp'>🔑</span>
            <div class='letter-tag'>Thư số 03</div>
            <div class='letter-title'>Password &amp; Mật khẩu</div>
            <div class='letter-desc'>Gợi ý câu đố giải pass chống reup, giải cứu các chương bị khóa.</div>
          </a>

          <a class='letter-card' href='/p/mot-so-muc-khac.html'>
            <span class='letter-stamp'>🎐</span>
            <div class='letter-tag'>Thư số 04</div>
            <div class='letter-title'>Một số mục khác</div>
            <div class='letter-desc'>Nội quy nhà, tâm sự mùa hè, hòm thư kết bạn &amp; tản văn thanh xuân.</div>
          </a>
        </section>
      </b:if>

      <!-- Vùng bài đăng Blogger Chuẩn -->
      <b:section class='main-content' id='main' showaddelement='yes'>
        <b:widget id='Blog1' locked='true' title='Bài đăng trên Blog' type='Blog' version='2'>
          <b:includable id='main'>
            <div class='posts-wrapper'>
              <b:loop values='data:posts' var='post'>
                <article class='story-item' expr:id='data:post.id'>
                  <b:if cond='data:post.firstImageUrl'>
                    <img class='story-thumb' expr:alt='data:post.title' expr:src='data:post.firstImageUrl'/>
                  </b:if>
                  <div class='story-info'>
                    <h2 class='story-title'>
                      <a expr:href='data:post.url'><data:post.title/></a>
                    </h2>
                    <div style='font-size:0.85rem; color:var(--text-muted); margin: 6px 0 10px;'>
                      <span>📅 <data:post.date/></span> | 
                      <span>✍️ <data:post.author.name/></span>
                    </div>
                    <div class='post-snippet' style='font-family:var(--font-serif); font-size:0.95rem; line-height:1.6;'>
                      <data:post.snippet/>
                    </div>
                  </div>
                </article>
              </b:loop>
            </div>
          </b:includable>
        </b:widget>
      </b:section>

    </main>

    <!-- Sidebar Bên Phải -->
    <aside class='sidebar-area'>
      <!-- Widget Thông Báo Chính -->
      <div class='sidebar-widget'>
        <h3 class='widget-title'>📌 Bảng tin thông báo</h3>
        <p style='font-size:0.92rem; line-height:1.6; color:var(--text-main);'>
          Chào mùa hè 2026! Cảm ơn bạn đã ghé thăm <strong>better and better</strong>. 
          Lưu ý trang này là trang phụ, các chương có cảnh báo vui lòng xem mục gợi ý mật khẩu nhé!
        </p>
      </div>

      <!-- Widget Danh Mục Đổ Xuống (Dropdown) Chọn Tác Phẩm Truyện -->
      <div class='sidebar-widget'>
        <h3 class='widget-title'>📚 Chọn tác phẩm truyện ▾</h3>
        <select class='story-dropdown-select' onchange='if (this.value) window.location.href=this.value;'>
          <option value=''>-- Nhấp để chọn tác phẩm --</option>
          <option value='/search/label/Vào Mùa Hè Năm Ấy Chúng Ta Từng Tương Ngộ'>Vào Mùa Hè Năm Ấy Chúng Ta Từng Tương Ngộ [Full]</option>
          <option value='/search/label/Bồ Công Anh Trong Gió Mùa Hạ'>Bồ Công Anh Trong Gió Mùa Hạ [Đang ra]</option>
          <option value='/search/label/Chiếc Thuyền Nhỏ Ngược Gió Của Em'>Chiếc Thuyền Nhỏ Ngược Gió Của Em [Đang ra]</option>
          <option value='/search/label/Mật Mã Hoa Anh Đào Dưới Hiên Trường'>Mật Mã Hoa Anh Đào Dưới Hiên Trường [Full]</option>
          <option value='/search/label/Nắng Vàng Cùng Cậu Qua Năm Tháng'>Nắng Vàng Cùng Cậu Qua Năm Tháng [Full]</option>
        </select>
      </div>

      <!-- Widget Chương Mới Nhất -->
      <div class='sidebar-widget'>
        <h3 class='widget-title'>⏰ Chương mới cập nhật</h3>
        <ul style='list-style:none; padding:0; display:flex; flex-direction:column; gap:12px;'>
          <li style='border-bottom:1px solid var(--border-color); padding-bottom:8px;'>
            <a href='#' style='text-decoration:none; font-weight:600; color:var(--text-main); font-size:0.9rem;'>
              Vào Mùa Hè Năm Ấy - Đại kết cục
            </a>
            <div style='font-size:0.78rem; color:var(--text-muted);'>Hôm nay • 45 chương trọn vẹn</div>
          </li>
          <li style='border-bottom:1px solid var(--border-color); padding-bottom:8px;'>
            <a href='#' style='text-decoration:none; font-weight:600; color:var(--text-main); font-size:0.9rem;'>
              Bồ Công Anh Trong Gió Mùa Hạ - C3
            </a>
            <div style='font-size:0.78rem; color:var(--text-muted);'>Hôm qua • Đã có gợi ý pass</div>
          </li>
          <li style='padding-bottom:4px;'>
            <a href='#' style='text-decoration:none; font-weight:600; color:var(--text-main); font-size:0.9rem;'>
              Chiếc Thuyền Nhỏ Ngược Gió - C2
            </a>
            <div style='font-size:0.78rem; color:var(--text-muted);'>2 ngày trước • Ngọt ngào</div>
          </li>
        </ul>
      </div>

      <!-- Profile mini của Mellifluous -->
      <div class='sidebar-widget' style='text-align:center;'>
        <div style='font-size:2.4rem; margin-bottom:6px;'>⛵🌸</div>
        <div style='font-family:var(--font-display); font-weight:700; font-size:1.1rem; color:var(--accent-pink);'>Mellifluous</div>
        <div style='font-size:0.82rem; font-style:italic; color:var(--text-muted); margin-top:4px;'>
          "Gửi vào gió hạ một đóa hoa anh đào, gửi vào tim người một thời niên thiếu..."
        </div>
      </div>
    </aside>
  </div>

  <!-- Footer -->
  <footer class='melli-footer'>
    <div class='footer-socials'>
      <a class='social-circle' href='https://facebook.com' target='_blank' title='Facebook'>
        <svg fill='currentColor' height='18' viewBox='0 0 24 24' width='18'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/></svg>
      </a>
      <a class='social-circle' href='https://wordpress.com' target='_blank' title='WordPress'>
        <svg fill='currentColor' height='18' viewBox='0 0 24 24' width='18'><circle cx='12' cy='12' r='10'/><path d='M3.5 12a8.5 8.5 0 0 0 13.5 7l-4.5-13a8.5 8.5 0 0 0-9 6z' fill='#fff'/></svg>
      </a>
      <a class='social-circle' href='https://wattpad.com' target='_blank' title='Wattpad'>
        <span style='font-weight:900; font-size:1rem; font-family:sans-serif;'>W</span>
      </a>
    </div>

    <!-- Bộ đếm người truy cập -->
    <div style='margin: 12px 0; font-size:0.88rem; color:var(--text-muted);'>
      🌸 Lượt ghé thăm ngôi nhà nhỏ: <strong id='visitor-counter' style='color:var(--accent-pink);'>18,924</strong> lượt
    </div>

    <div style='font-size:0.82rem; color:var(--text-muted);'>
      Copyright &#169; 2026 <strong>better and better</strong>. Chuyển ngữ phi lợi nhuận bởi <strong>Mellifluous</strong>. All rights reserved.
    </div>
  </footer>

  <!-- Script Hiệu Ứng Hoa Rơi & Chuyển Đổi Sáng/Tối -->
  <script type='text/javascript'>
  //<![CDATA[
  // 1. Chuyển đổi giao diện Sáng / Tối
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  if (themeToggleBtn) {
    if (localStorage.getItem('melli-theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggleBtn.textContent = '☀️';
    }
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('melli-theme', isDark ? 'dark' : 'light');
      themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // 2. Hiệu ứng cánh hoa anh đào rơi (Cherry Blossom Canvas)
  const canvas = document.getElementById('sakura-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let petalsActive = true;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const petals = [];
    const petalCount = 35;
    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 5 + 4,
        dx: Math.random() * 2 - 0.5,
        dy: Math.random() * 1.5 + 0.8,
        tilt: Math.random() * 10,
        tiltAngleInc: Math.random() * 0.05 + 0.02,
        tiltAngle: 0,
        opacity: Math.random() * 0.5 + 0.4
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      if (!petalsActive) return;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.tiltAngle += p.tiltAngleInc;
        p.y += p.dy;
        p.x += Math.sin(p.tiltAngle) * 1.2 + p.dx;
        p.tilt = Math.sin(p.tiltAngle) * 10;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        ctx.beginPath();
        ctx.fillStyle = 'rgba(251, 182, 206, ' + p.opacity + ')';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();

    const sakuraToggleBtn = document.getElementById('btn-sakura-toggle');
    if (sakuraToggleBtn) {
      sakuraToggleBtn.addEventListener('click', () => {
        petalsActive = !petalsActive;
        sakuraToggleBtn.style.opacity = petalsActive ? '1' : '0.4';
        if (petalsActive) draw();
      });
    }
  }
  //]]>
  </script>
</body>
</html>`;
