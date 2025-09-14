document.addEventListener('DOMContentLoaded', function() {
    // 找到页面上所有的项目头部区域
    const projectHeaders = document.querySelectorAll('.project-header');
  
    // 为每个项目头部区域添加点击事件
    projectHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        // 找到头部内部的图标按钮
        const toggleButton = this.querySelector('.toggle-details-btn');
        // 找到紧跟在 project-header 后面的详情内容div
        const content = this.nextElementSibling;
  
        // 切换 'show' 类来控制内容显示/隐藏
        content.classList.toggle('show');
  
        // 切换按钮的 'active' 类来控制图标旋转
        toggleButton.classList.toggle('active');
  
        // 更新 aria-expanded 属性
        const isExpanded = content.classList.contains('show');
        toggleButton.setAttribute('aria-expanded', isExpanded);
      });
    });
  });