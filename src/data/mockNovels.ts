import { Story, Announcement } from '../types';

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    date: 'Hôm nay, 10:30',
    title: 'Lịch ra chương hè & Cảnh báo web reup trộm',
    content: 'Dạo này có một số trang web reup truyện tự động không xin phép. Để bảo vệ chất xám tác giả và nhóm dịch, các chương cao trào từ chương 20 trở đi sẽ được đặt mật khẩu nhẹ nhàng. Các bạn hãy vào mục "Password" để lấy gợi ý nhé!',
    isPinned: true,
    tag: 'Quan trọng',
  },
  {
    id: 'ann-2',
    date: 'Hôm qua, 18:45',
    title: 'Mừng hoàn thành "Vào Mùa Hè Năm Ấy"',
    content: 'Cảm ơn mọi người đã đồng hành cùng Mellifluous suốt 45 chương truyện! Bộ truyện chính thức khép lại với kết thúc HE thật ngọt ngào dưới bóng hoa anh đào trường cấp ba.',
    isPinned: false,
    tag: 'Tin vui',
  },
  {
    id: 'ann-3',
    date: '12/06/2026',
    title: 'Mở hòm thư góp ý & tâm sự mùa thi',
    content: 'Chúc tất cả các sĩ tử và độc giả của "better and better" có một mùa thi tốt nghiệp thật rực rỡ và những ngày hè ngập tràn niềm vui!',
    isPinned: false,
    tag: 'Tâm sự',
  },
];

export const MOCK_STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'Vào Mùa Hè Năm Ấy Chúng Ta Từng Tương Ngộ',
    originalTitle: '那年盛夏我们曾相遇',
    author: 'Lam Tinh Lam Nguyệt',
    translator: 'Mellifluous',
    status: 'completed',
    genres: ['Thanh xuân', 'Vườn trường', 'Ngọt ngào', 'HE'],
    coverUrl: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=800&auto=format&fit=crop',
    description: 'Năm mười bảy tuổi ấy, tiếng ve râm ran ngoài cửa sổ lớp học và hương hoa anh đào cuối mùa bay vào vạt áo đồng phục trắng. Cố Hoài An đứng ngược sáng dưới bóng cây ngân hạnh, nụ cười như nắng ban mai sưởi ấm cả một thời niên thiếu ngây ngô của Thẩm Tri Ý. Một câu chuyện thanh xuân dịu dàng như ly trà sữa mùa hạ, ngọt ngào mà sâu lắng.',
    rating: 4.9,
    views: 48920,
    updatedDate: '15/06/2026',
    isHot: true,
    isRecommended: true,
    chapters: [
      {
        id: 'c1-1',
        storyId: 'story-1',
        chapterNum: 1,
        title: 'Chương 1: Tiếng ve râm ran và vạt áo đồng phục',
        isLocked: false,
        releaseDate: '10/05/2026',
        wordCount: 3200,
        content: `Mùa hè năm mười bảy tuổi bắt đầu bằng một buổi chiều đầy nắng.

Ánh nắng xuyên qua tán lá bàng trước hiên lớp 11A3, vỡ vụn thành từng đốm sáng nhảy múa trên mặt bàn gỗ đã mòn vẹt mép. Quạt trần kêu ro ro từng nhịp đều đặn, không xua nổi cái oi ả của những ngày đầu tháng sáu.

Thẩm Tri Ý gối đầu lên cánh tay, nửa tỉnh nửa mơ nhìn ra ngoài cửa sổ. Trên sân vận động, tiếng bóng rổ đập xuống nền xi măng vang lên bình bịch, hòa cùng tiếng hò reo giòn giã của đám con trai.

"Tri Ý, nhìn kìa! Cố Hoài An lại ghi thêm một quả ba điểm rồi!"

Cô bạn cùng bàn Lạc Lạc huých nhẹ cùi chỏ vào tay cô, hai mắt sáng rỡ như sao. Tri Ý lười biếng nâng mi mắt, vô thức phóng tầm mắt về phía sân bóng rổ.

Giữa đám đông nam sinh mồ hôi nhễ nhại, có một thiếu niên mặc áo đấu số 7 màu trắng xanh. Dưới ánh hoàng hôn rực rỡ, mái tóc đen nhánh của cậu bay khẽ trong gió hè, nụ cười rạng rỡ như gom hết tất cả sự ấm áp của thế gian này.

Đó là Cố Hoài An. Học thần của khối Tự Nhiên, đội trưởng đội bóng rổ, và cũng là bí mật giấu kín sâu nhất trong cuốn nhật ký gáy hoa anh đào của cô.`
      },
      {
        id: 'c1-2',
        storyId: 'story-1',
        chapterNum: 2,
        title: 'Chương 2: Cây kem vị dưa hấu và cơn mưa rào bất chợt',
        isLocked: false,
        releaseDate: '15/05/2026',
        wordCount: 3450,
        content: `Cơn mưa rào mùa hạ đến bất chợt như một cái chớp mắt.

Mây đen kéo đến ùn ùn rồi trút nước ào ào xuống mái tôn trường học. Mùi đất ẩm nồng nặc bốc lên, mang theo hơi thở mát lạnh xua tan cái nóng bức ngột ngạt.

Trước cửa hàng tiện lợi đối diện cổng trường, Thẩm Tri Ý đứng nép dưới mái hiên hẹp, hai tay ôm cặp sách trước ngực. Chiếc ô duy nhất cô mang theo đã bị hỏng nan từ tuần trước, giờ đây chỉ biết đứng nhìn màn mưa giăng kín lối về.

"Cậu không mang ô à?"

Một giọng nói trầm ấm, vương chút hơi thở thiếu niên đột ngột vang lên từ phía sau.

Tri Ý giật mình quay lại. Cố Hoài An đang cầm trên tay hai que kem dưa hấu mát lạnh, chiếc balo một quai khoác hờ hững trên vai, khóe môi khẽ cong lên một độ cong vừa vặn:

"Chia cho cậu một nửa, cùng trú mưa nhé?"`
      },
      {
        id: 'c1-3',
        storyId: 'story-1',
        chapterNum: 3,
        title: 'Chương 3: Bức thư tình giấu trong ngăn kéo bàn học',
        isLocked: true,
        passwordHint: 'Tên món quà sinh nhật Cố Hoài An tặng Tri Ý (viết liền không dấu, chữ thường: caykemduahau)',
        password: 'caykemduahau',
        releaseDate: '22/05/2026',
        wordCount: 4100,
        content: `[Nội dung chương VIP đã được mở khóa thành công!]

Cố Hoài An khẽ đặt phong thư màu hồng phấn lên bàn học của cô. Trên mép phong bì có dán một bông hoa anh đào khô ép cẩn thận.

"Thẩm Tri Ý, từ nay về sau, ô của tớ che cho cậu, bài tập tớ giảng cho cậu. Có chịu không?"

Gió mùa hè khẽ thổi tung tà rèm cửa sổ màu xanh lơ. Trong khoảnh khắc ấy, Thẩm Tri Ý nghe thấy nhịp tim mình đập loạn nhịp như tiếng trống trường tan tiết cuối.`
      },
      {
        id: 'c1-4',
        storyId: 'story-1',
        chapterNum: 4,
        title: 'Chương 4: Kết thúc mỹ mãn dưới cây ngân hạnh (Đại kết cục)',
        isLocked: false,
        releaseDate: '15/06/2026',
        wordCount: 4800,
        content: `Năm năm sau, lễ tốt nghiệp đại học.

Dưới tán cây hoa anh đào rực rỡ nắng hè, Cố Hoài An mặc áo cử nhân chỉnh tề, trong tay là bó hoa hướng dương vàng óng bước từng bước vững chãi về phía cô gái nhỏ của mình.

"Tri Ý, thanh xuân của tớ bắt đầu từ mùa hè năm mười bảy tuổi có cậu, và sẽ kéo dài đến trọn đời."`
      }
    ]
  },
  {
    id: 'story-2',
    title: 'Bồ Công Anh Trong Gió Mùa Hạ',
    originalTitle: '夏风里的蒲公英',
    author: 'Diệp Lạc Vô Trần',
    translator: 'Mellifluous',
    status: 'ongoing',
    genres: ['Thanh xuân', 'Chữa lành', 'Đơn phương', 'Học đường'],
    coverUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop',
    description: 'Lâm Duyệt luôn nghĩ mình chỉ là một đóa bồ công anh nhỏ bé, lặng lẽ bay theo gió bên lề cuộc sống lấp lánh của Lục Trì. Cho đến một ngày mưa đầu hạ, cậu bước đến che nghiêng chiếc ô về phía cô, nói rằng: "Cậu không phải trôi dạt theo gió, tớ chính là bến đỗ của cậu."',
    rating: 4.8,
    views: 32150,
    updatedDate: '14/06/2026',
    isHot: true,
    isRecommended: false,
    chapters: [
      {
        id: 'c2-1',
        storyId: 'story-2',
        chapterNum: 1,
        title: 'Chương 1: Chiếc bóng mờ nhạt sau lưng cậu',
        isLocked: false,
        releaseDate: '01/06/2026',
        wordCount: 2900,
        content: `Mỗi ngày lúc tan học, Lâm Duyệt đều đi chậm lại ba bước.

Ba bước chân ấy là khoảng cách giữa một nữ sinh bình thường lớp Xã Hội và hội trưởng hội học sinh tài hoa xuất chúng. Cậu bước đi giữa hàng cây phong tỏa bóng, còn cô dõi theo bóng lưng thẳng tắp của cậu, cất giấu sự dịu dàng không ai hay biết.`
      },
      {
        id: 'c2-2',
        storyId: 'story-2',
        chapterNum: 2,
        title: 'Chương 2: Tấm vé xe buýt số 14',
        isLocked: false,
        releaseDate: '07/06/2026',
        wordCount: 3100,
        content: `Chuyến xe buýt số 14 luôn đông đúc vào giờ cao điểm năm giờ chiều.

Xe phanh gấp, Lâm Duyệt mất đà ngã nhào về phía trước. Một bàn tay ấm áp kịp thời đưa ra đỡ lấy cổ tay mảnh khảnh của cô. Hương trà xanh thoang thoảng quen thuộc bao bọc lấy giác quan:

"Cẩn thận, đứng cạnh tớ này."`
      },
      {
        id: 'c2-3',
        storyId: 'story-2',
        chapterNum: 3,
        title: 'Chương 3: Lời tỏ tình viết bằng mực tàng hình',
        isLocked: true,
        passwordHint: 'Tên tuyến xe buýt hai người cùng đi (viết thường, chữ số viết liền: xebuyt14)',
        password: 'xebuyt14',
        releaseDate: '14/06/2026',
        wordCount: 3600,
        content: `[Nội dung chương VIP đã được mở khóa thành công!]

Cây bút nước màu xanh nhạt lướt trên trang giấy trắng. Dưới ánh đèn bàn vàng dịu, những dòng chữ vô hình dần hiện ra khi hơ qua ngọn lửa nhỏ:

"Lục Trì, tớ thích cậu. Thích như ve sầu yêu mùa hạ, dù ngắn ngủi cũng nguyện cất tiếng ca vang nhất."`
      }
    ]
  },
  {
    id: 'story-3',
    title: 'Chiếc Thuyền Nhỏ Ngược Gió Của Em',
    originalTitle: '逆风而行的小舟',
    author: 'Thanh Mộc Miên',
    translator: 'Mellifluous',
    status: 'ongoing',
    genres: ['Đô thị tình duyên', 'Thanh mai trúc mã', 'Ngọt sủng'],
    coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    description: 'Bộ truyện mang tiêu đề lấy cảm hứng từ slogan phụ của blog: "Một chiếc thuyền nhỏ lênh đênh ngược gió". Khi cả thế giới ngoài kia giông bão, anh vẫn kiên định chèo lái con thuyền nhỏ, chở cô cập bến bình yên. Tình yêu mười năm trưởng thành từ áo trắng đồng phục đến váy cưới tinh khôi.',
    rating: 5.0,
    views: 65400,
    updatedDate: '15/06/2026',
    isHot: true,
    isRecommended: true,
    chapters: [
      {
        id: 'c3-1',
        storyId: 'story-3',
        chapterNum: 1,
        title: 'Chương 1: Thập niên tương tư',
        isLocked: false,
        releaseDate: '20/05/2026',
        wordCount: 3300,
        content: `Người ta bảo thanh mai trúc mã thường khó thành đôi vì quá hiểu nhau đến mức không còn cảm giác rung động.

Nhưng đối với Thẩm Dực, mỗi ngày nhìn thấy Châu Kha từ khi cô còn buộc tóc hai chùm cho đến khi trở thành cô gái duyên dáng, cảm xúc trong lòng anh chỉ có sâu đậm thêm chứ chưa từng vơi bớt.`
      },
      {
        id: 'c3-2',
        storyId: 'story-3',
        chapterNum: 2,
        title: 'Chương 2: Đêm ngắm pháo hoa bên bờ sông',
        isLocked: false,
        releaseDate: '28/05/2026',
        wordCount: 3700,
        content: `Tiếng pháo hoa nổ tung trên nền trời đêm mùa hè, thắp sáng cả mặt sông lấp lánh như dát bạc.

Châu Kha chỉ tay lên bầu trời rực rỡ, gió sông thổi bay mái tóc dài mượt mà của cô. Thẩm Dực đứng bên cạnh, không nhìn pháo hoa, mà ánh mắt chỉ hướng về nụ cười rạng rỡ của cô.`
      }
    ]
  },
  {
    id: 'story-4',
    title: 'Mật Mã Hoa Anh Đào Dưới Hiên Trường',
    originalTitle: '校舍樱花下的密码',
    author: 'Bạch Lộ Vi Sương',
    translator: 'Mellifluous',
    status: 'completed',
    genres: ['Học đường', 'Thanh mai trúc mã', 'HE', 'Song hướng thầm mến'],
    coverUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=800&auto=format&fit=crop',
    description: 'Dưới gốc cây hoa anh đào trăm tuổi góc sân trường, có một chiếc hòm thư bí mật giấu dưới viên gạch thứ ba. Mỗi tuần, cô và cậu trao đổi nhau những mẩu giấy giải đố toán học, nhưng ẩn sau từng công thức lại là mật mã tình yêu ngọt ngào nhất.',
    rating: 4.9,
    views: 54100,
    updatedDate: '02/06/2026',
    isHot: false,
    isRecommended: true,
    chapters: [
      {
        id: 'c4-1',
        storyId: 'story-4',
        chapterNum: 1,
        title: 'Chương 1: Viên gạch thứ ba dưới tán hoa',
        isLocked: false,
        releaseDate: '01/04/2026',
        wordCount: 3100,
        content: `Hoa anh đào rơi lả tả xuống mặt đất như một tấm thảm lụa hồng phấn.

Giang Tinh Hứa cúi người nhấc nhẹ viên gạch thứ ba lên. Bên dưới là một chiếc hộp thiếc đựng bánh quy đã gỉ sét nhẹ, bên trong có một phong bì dán kín bằng con dấu sáp hình đóa hoa đào.`
      }
    ]
  },
  {
    id: 'story-5',
    title: 'Nắng Vàng Cùng Cậu Qua Năm Tháng',
    originalTitle: '阳光与你皆同在',
    author: 'Mộc Cẩn Thư',
    translator: 'Mellifluous',
    status: 'completed',
    genres: ['Thanh xuân', 'Ấm áp', 'Học đường', 'HE'],
    coverUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    description: 'Thanh xuân như một chuyến xe lửa chỉ chạy một chiều, may mắn thay trên băng ghế bên cạnh luôn có người nắm lấy tay em. Bản dịch trọn bộ 30 chương mừng sinh nhật blog!',
    rating: 4.85,
    views: 41200,
    updatedDate: '28/05/2026',
    isHot: false,
    isRecommended: false,
    chapters: [
      {
        id: 'c5-1',
        storyId: 'story-5',
        chapterNum: 1,
        title: 'Chương 1: Nắng sớm đầu hạ',
        isLocked: false,
        releaseDate: '10/03/2026',
        wordCount: 2800,
        content: `Mỗi năm khi hoa anh đào tàn cũng là lúc mùa hè gõ cửa bằng những cơn mưa rào trong vắt...`
      }
    ]
  }
];

export const PASSWORD_GUIDES = [
  {
    id: 'pw-1',
    category: 'Nguyên tắc mật khẩu chung',
    description: 'Mật khẩu tại "better and better" được đặt dựa trên chi tiết trong truyện nhằm chống web reup tự động. Pass KHÔNG BAO GIỜ mang tính đánh đố vô lý.',
    rules: [
      'Tất cả pass đều viết thường, không dấu, không khoảng cách, không ký tự đặc biệt (trừ khi có ghi chú riêng).',
      'Đọc kỹ gợi ý ở đầu mỗi chương truyện bị khóa.',
      'Tuyệt đối không share pass công khai trên các nhóm reup hoặc cmt dưới bài viết.',
      'Nếu trả lời đúng câu hỏi mà vẫn báo sai, hãy kiểm tra lại bộ gõ tiếng Việt (Unikey/Gboard) xem có bị nhảy dấu không nhé!'
    ]
  },
  {
    id: 'pw-2',
    category: 'Gợi ý pass các bộ truyện đang tiến hành',
    storiesWithPass: [
      {
        title: 'Vào Mùa Hè Năm Ấy Chúng Ta Từng Tương Ngộ',
        lockedChapters: 'Chương 3, 7, 15, 25',
        hintFormula: 'Tên món quà sinh nhật / Món ăn yêu thích của nhân vật (Ví dụ: caykemduahau)',
      },
      {
        title: 'Bồ Công Anh Trong Gió Mùa Hạ',
        lockedChapters: 'Chương 3, 10, 18',
        hintFormula: 'Tuyến xe buýt + số xe viết liền (Ví dụ: xebuyt14)',
      },
      {
        title: 'Chiếc Thuyền Nhỏ Ngược Gió Của Em',
        lockedChapters: 'Chương 12 trở đi',
        hintFormula: 'Ngày tháng sinh nhật của tác giả (định dạng ddmmyyyy)',
      }
    ]
  }
];

export const STATIC_PAGES = [
  {
    id: 'about',
    title: 'Xin chào, tớ là Mellifluous',
    subtitle: '━ Một chiếc thuyền nhỏ lênh đênh ngược gió',
    content: `Chào mừng các bạn đã ghé thăm ngôi nhà nhỏ của tớ!

Tớ là Mellifluous (bạn có thể gọi tớ là Melli hoặc Nắng Mùa Hạ). Đây là trang phụ của tớ, đăng linh ta linh tinh. Đăng truyện song song với trang chính, cập nhật muộn và không thường xuyên, phòng ngừa trang chính bị khóa.

Truyện trong nhà được chuyển ngữ dưới sự cho phép của tác giả với mục đích phi lợi nhuận, sẽ có mật khẩu để đảm bảo công sức của tác giả lẫn dịch giả.

Hy vọng những con chữ nhỏ bé và làn gió hoa anh đào nơi đây sẽ mang lại cho bạn chút êm đềm sau những giờ học tập và làm việc mệt mỏi!`,
  },
  {
    id: 'rules',
    title: 'Nội quy nhà Mellifluous',
    subtitle: 'Ghé chơi xin giữ chút bình yên',
    content: `1. Không reup bản chuyển ngữ sang bất kỳ nền tảng nào khác (wattpad, truyenfull, nettruyen, v.v.).
2. Không thương mại hóa, không in ấn bán lấy tiền dưới mọi hình thức.
3. Không chia sẻ mật khẩu công khai trên mạng xã hội.
4. Tôn trọng tác giả và người dịch. Cmt lịch sự, văn minh, không xúc phạm nhân vật.`,
  }
];
