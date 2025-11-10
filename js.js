// 给所有照片添加点击放大功能
const photos = document.querySelectorAll('.photo-item img');
photos.forEach(photo => {
  photo.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.9)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 999;

    const bigImg = document.createElement('img');
    bigImg.src = photo.src;
    bigImg.style.maxWidth = '90%';
    bigImg.style.maxHeight = '90%';

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    // 点击空白处关闭放大
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
  });
});
