const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Chọn một cổng bạn muốn dùng

// Sử dụng các file tĩnh trong thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route mặc định trả về file index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lắng nghe các kết nối đến cổng đã chọn
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
