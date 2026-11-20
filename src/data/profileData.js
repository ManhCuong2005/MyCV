/**
 * FILE CẤU HÌNH DỮ LIỆU PROFILE CÁ NHÂN (DIGITAL CV)
 *
 * Thông tin cá nhân của Nguyễn Mạnh Cường
 */

export const profileData = {
  // Thông tin cá nhân cơ bản
  personal: {
    fullName: "Nguyễn Mạnh Cường",
    title: "Software Engineer | Fullstack & Systems Developer",
    subtitle:
      "Sinh viên Kỹ sư CNTT đam mê xây dựng hệ thống mạng Realtime, ứng dụng Thương mại điện tử tích hợp AI & Blockchain, song song kinh nghiệm kinh doanh thực chiến TikTok Shop & Affiliate Marketing.",
    avatar:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/486269939_1320799155857208_4315338073025820117_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEINXye-I3s4gRo_0h08bCUZt-FYPCNaNlm34Vg8I1o2dAXNCbPle3RNM7Yip5zGzslHMFWHXuivPGRW-JNF1rV&_nc_ohc=Qq_6QcjihFQQ7kNvwH6fSfQ&_nc_oc=Adp3m71LccKEk0_fGWWLblL9XBBzx4yu-AWa-tOO8afAasxOVdi76Cmg_qBJPIoLOy_S1k7IumnffE8cbX0IKG7t&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=n8-auHEOkrvCHL9y2-MJGA&_nc_ss=7b2a8&oh=00_AQKtlCDqderVgjrGa5qiz_w4pcIc9XDpWHF-czwyQOTtBA&oe=6A9DB677",
    openToWork: true,
    workStatusText: "Sẵn sàng cho cơ hội Thực tập & Dự án mới",
    location: "Đà Nẵng, Việt Nam",
    email: "manhcuongnguyen2205@gmail.com",
    phone: "0977148627",
    dateOfBirth: "22/05/2005",
    website: "https://cuonglocnuoc.vercel.app",
    github: "https://github.com/manhcuong2005",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com/manhcuong2205",
    telegram: "https://t.me/0977148627",
    summary: `Tôi là sinh viên ngành Kỹ sư Công nghệ Thông tin (2023–2028) với đam mê sâu sắc về lập trình hệ thống, mạng đa luồng và công nghệ mới như AI, Blockchain. Song song đó, tôi sở hữu kinh nghiệm thực chiến về kinh doanh online — từ Affiliate Marketing đến TikTok Shop — cùng kỹ năng sáng tạo nội dung và dựng video chuyên nghiệp.`,
  },

  // Các con số thống kê nổi bật
  stats: [
    { label: "GPA Hiện tại", value: "3.1", suffix: "/4.0" },
    { label: "Dự án Nổi bật", value: "5+", suffix: "" },
    { label: "Doanh thu Affiliate", value: "2.5B", suffix: "đ" },
    { label: "Đánh giá Shop", value: "4.8★", suffix: "" },
  ],

  // Các dịch vụ / Lĩnh vực chuyên môn
  services: [
    {
      icon: "Server",
      title: "Backend & Systems Development",
      description:
        "Xây dựng backend mạnh mẽ với Java Spring Boot, Node.js và thiết kế CSDL quan hệ PostgreSQL/MySQL. Kinh nghiệm lập trình socket TCP/UDP đa luồng cho ứng dụng Realtime.",
    },
    {
      icon: "Cpu",
      title: "AI & Blockchain Integration",
      description:
        "Tích hợp mô hình AI nhận diện khuôn mặt (Python/OpenCV) và cổng thanh toán Blockchain, ZaloPay Sandbox vào hệ thống thương mại điện tử thực tế.",
    },
    {
      icon: "Coins",
      title: "Affiliate Marketing & E-Commerce",
      description:
        "Vận hành affiliate marketing đa kênh với doanh thu ước tính ~2.5 tỷ đồng. Kinh doanh TikTok Shop đạt Star Shop, 500+ đơn hàng, đánh giá 4.8★, doanh thu ~35 triệu.",
    },
    {
      icon: "Video",
      title: "Content Creation & Video Editing",
      description:
        "Quay dựng video chuyên nghiệp phục vụ quảng bá thương hiệu, sản phẩm Affiliate và TikTok Shop. Nắm vững workflow sản xuất nội dung tăng chuyển đổi (conversion rate).",
    },
  ],

  // Kỹ năng chuyên môn
  skillCategories: [
    {
      name: "Ngôn ngữ Lập trình (Core Languages)",
      skills: [
        { name: "Java (Core, OOP, Advanced)", level: 88, icon: "Code" },
        {
          name: "C / C++ (Data Structures & Sockets)",
          level: 82,
          icon: "Code",
        },
        { name: "Python (AI & Scripting)", level: 80, icon: "FileCode" },
        { name: "JavaScript / TypeScript", level: 85, icon: "FileCode" },
        { name: "HTML5 / CSS3 / Tailwind", level: 88, icon: "Palette" },
      ],
    },
    {
      name: "Backend Frameworks & Cơ sở dữ liệu",
      skills: [
        { name: "Spring Boot / Java Web", level: 85, icon: "Server" },
        { name: "PostgreSQL", level: 82, icon: "Database" },
        { name: "MySQL", level: 85, icon: "Database" },
        { name: "RESTful API Architecture", level: 86, icon: "Network" },
        { name: "Node.js / Express", level: 78, icon: "Server" },
      ],
    },
    {
      name: "Mạng máy tính & Công nghệ Mới",
      skills: [
        {
          name: "Socket TCP / UDP & Multi-threading",
          level: 86,
          icon: "Network",
        },
        { name: "AI / Face Recognition (Python)", level: 78, icon: "Cpu" },
        { name: "Blockchain & Web3 Payment", level: 75, icon: "Coins" },
        { name: "ZaloPay Sandbox Integration", level: 85, icon: "CreditCard" },
      ],
    },
    {
      name: "Kinh doanh & Sáng tạo Nội dung",
      skills: [
        {
          name: "Affiliate Marketing (Đa kênh)",
          level: 90,
          icon: "TrendingUp",
        },
        { name: "TikTok Shop Operations", level: 88, icon: "ShoppingBag" },
        {
          name: "Quay & Dựng Video (Premiere/Capcut)",
          level: 85,
          icon: "Video",
        },
        { name: "Content Strategy & SEO", level: 80, icon: "Lightbulb" },
      ],
    },
  ],

  // Kinh nghiệm lập trình CNTT
  experiences: [
    {
      period: "2023 – 2026",
      role: "Sinh viên Kỹ sư CNTT – Lập trình Dự án",
      company: "Đại học",
      location: "Đà Nẵng, Việt Nam",
      description:
        "Học tập và thực hành song song các dự án lập trình thực tế từ cơ bản đến nâng cao qua các năm học.",
      achievements: [
        "2023 – Xây dựng ứng dụng bán đồ ăn (Food Delivery) và ứng dụng nhắn tin cơ bản bằng Java Core & OOP.",
        "2025 – Phát triển ứng dụng nhắn tin nâng cao với Java: TCP/UDP socket đa luồng, gọi điện Realtime, đồng bộ dữ liệu.",
        "2026 – Xây dựng hệ thống thương mại điện tử tích hợp AI nhận diện khuôn mặt và thanh toán bằng Blockchain.",
      ],
      techStack: [
        "Java",
        "C++",
        "Python",
        "Spring Boot",
        "PostgreSQL",
        "MySQL",
        "TCP/UDP",
        "Blockchain",
      ],
    },
  ],

  // Kinh nghiệm thương mại điện tử & kinh doanh
  businessExperiences: [
    {
      period: "10/2024 – 09/2026",
      role: "Affiliate Marketer – Đa kênh & Đa nền tảng",
      company: "Tự kinh doanh (Freelance)",
      location: "Toàn quốc (Online)",
      type: "affiliate",
      description:
        "Vận hành hệ thống affiliate marketing đa kênh trên các nền tảng mạng xã hội và sàn thương mại điện tử, tiếp cận và chuyển đổi hàng nghìn khách hàng tiềm năng.",
      achievements: [
        "Doanh thu ước tính từ affiliate đạt mức ~2.5 tỷ đồng trong vòng 2 năm hoạt động.",
        "Xây dựng hệ thống nội dung quảng bá (content funnel) tối ưu tỷ lệ chuyển đổi trên đa kênh.",
        "Kết hợp video marketing và SEO để tăng traffic tự nhiên bền vững.",
      ],
      techStack: [
        "Affiliate Networks",
        "TikTok Ads",
        "Facebook Ads",
        "Content Marketing",
        "SEO",
      ],
    },
    {
      period: "05/2025 – 09/2026",
      role: "Chủ Shop – TikTok Shop Seller",
      company: "TikTok Shop",
      location: "Đà Nẵng / Toàn quốc",
      type: "tiktok",
      description:
        "Tự vận hành cửa hàng TikTok Shop từ bước nhập hàng, quay video sản phẩm đến xử lý đơn hàng và chăm sóc khách hàng.",
      achievements: [
        "Đạt 500+ đơn hàng thành công với doanh thu ~35 triệu đồng.",
        "Nhận huy hiệu ⭐ Star Shop với điểm đánh giá 4.8/5 sao từ khách hàng.",
        "Tỷ lệ hoàn hàng duy trì ở mức thấp, tỷ lệ phản hồi khách hàng đạt 95%+.",
      ],
      techStack: [
        "TikTok Shop",
        "Video Marketing",
        "Livestream",
        "Order Management",
        "Customer Care",
      ],
    },
    {
      period: "10/2024 – 09/2026",
      role: "Video Editor & Content Creator",
      company: "Tự thực hiện – Kênh Affiliate & TikTok",
      location: "Đà Nẵng, Việt Nam",
      type: "video",
      description:
        "Tự sản xuất, quay và dựng toàn bộ video quảng cáo sản phẩm phục vụ chiến dịch Affiliate và TikTok Shop.",
      achievements: [
        "Sản xuất hàng chục video quảng bá sản phẩm đạt hàng nghìn lượt xem tự nhiên.",
        "Thành thạo workflow dựng video thương mại với CapCut",
        "Xây dựng phong cách nội dung nhất quán, tăng nhận diện thương hiệu cá nhân.",
      ],
      techStack: ["CapCut", "TikTok Creator Tools", "Canva"],
    },
  ],

  // Học vấn & Bằng cấp
  education: [
    {
      period: "2023 – 2028",
      degree: "Kỹ sư Công nghệ Thông tin",
      school: "Khoa Công nghệ Thông tin",
      grade: "GPA Hiện tại: 3.1 / 4.0",
      description:
        "Chương trình đào tạo Kỹ sư CNTT chính quy, nghiên cứu chuyên sâu về Kiến trúc hệ thống, Lập trình mạng, Trí tuệ nhân tạo và Cơ sở dữ liệu phân tán.",
    },
  ],

  // Chứng chỉ tiêu biểu
  certifications: [
    {
      name: "Chứng chỉ Hoàn thành Cuộc thi Java Web – Spring Boot",
      issuer: "FPT Software",
      year: "2025",
      description:
        "Thi lập trình web động bằng Spring Boot không dùng WiFi, tự code hoàn toàn từ đầu, chấm điểm đủ chuẩn để Pass.",
      link: "#",
    },
    {
      name: "⭐ Star Shop – TikTok Shop",
      issuer: "TikTok Shop Vietnam",
      year: "2025",
      description:
        "Đạt huy hiệu Star Shop với 500+ đơn hàng, doanh thu ~35 triệu, đánh giá 4.8/5 sao.",
      link: "#",
    },
  ],

  // Dự án tiêu biểu
  projects: [
    {
      id: 1,
      title: "Ứng dụng Nhắn tin & Gọi điện Desktop Realtime (TCP / UDP)",
      category: "web",
      categoryLabel: "Desktop & Network",
      tagline:
        "Hệ thống truyền thông đa luồng realtime — TCP nhắn tin, UDP gọi điện",
      description:
        "Ứng dụng Desktop cho phép nhắn tin tức thời qua TCP đảm bảo độ tin cậy và gọi thoại Realtime qua UDP tốc độ cao, kết hợp kiến trúc đa luồng Multi-threading Socket Programming.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tags: [
        "Java",
        "C++",
        "TCP/UDP Sockets",
        "Multi-threading",
        "Network Audio",
      ],
      liveUrl: "https://github.com/manhcuong2005",
      githubUrl: "https://github.com/manhcuong2005",
      featured: true,
    },
    {
      id: 2,
      title: "Hệ sinh thái E-Commerce tích hợp AI & Blockchain",
      category: "web",
      categoryLabel: "Fullstack & AI Web3",
      tagline:
        "Thương mại điện tử thông minh — AI nhận diện, thanh toán Blockchain & ZaloPay",
      description:
        "Nền tảng thương mại điện tử hiện đại tích hợp AI nhận diện khuôn mặt đăng nhập (Python/OpenCV), thanh toán hợp đồng thông minh Blockchain và ZaloPay Sandbox ảo.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      tags: [
        "Spring Boot",
        "Python AI",
        "Blockchain",
        "PostgreSQL",
        "ZaloPay Sandbox",
        "Vue.js",
      ],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: true,
    },
    {
      id: 3,
      title: "Ứng dụng Bán đồ ăn & Nhắn tin cơ bản (Java Core)",
      category: "web",
      categoryLabel: "Java Desktop App",
      tagline:
        "Ứng dụng đầu tay — food ordering & basic messaging với Java OOP",
      description:
        "Ứng dụng desktop bán đồ ăn (gọi món, quản lý đơn hàng) và nhắn tin cơ bản xây dựng bằng Java Core, áp dụng các nguyên lý lập trình hướng đối tượng và cấu trúc dữ liệu.",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
      tags: ["Java Core", "OOP", "JavaSwing / JavaFX", "MySQL"],
      liveUrl: "https://github.com/manhcuong2005",
      githubUrl: "https://github.com/manhcuong2005",
      featured: false,
    },
    {
      id: 4,
      title: "CuongLocNuoc Web Platform",
      category: "web",
      categoryLabel: "Web Application",
      tagline: "Website giới thiệu và quản lý sản phẩm thực tế",
      description:
        "Website chính thức giới thiệu dịch vụ và sản phẩm lọc nước, giao diện Responsive hoàn chỉnh và triển khai trên Vercel.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["JavaScript", "CSS3", "Tailwind CSS", "Vercel"],
      liveUrl: "https://cuonglocnuoc.vercel.app",
      githubUrl: "https://github.com/manhcuong2005",
      featured: false,
    },
  ],
};
