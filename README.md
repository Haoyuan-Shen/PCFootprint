# PCFootprint project website

独立静态项目页，无需安装依赖或构建。包含正式论文 PDF、论文图、数据集链接和可复制的 BibTeX。

## 发布到自己的 GitHub Pages

1. 登录你的 GitHub，创建一个 **Public** 仓库，名称为 `PCFootprint`。
2. 上传本目录的 `index.html`、`styles.css`、`main.js`、`.nojekyll` 和整个 `assets` 目录到仓库根目录。也可解压交付 ZIP 后上传。
3. 在仓库进入 **Settings → Pages → Build and deployment**。
4. Source 选择 **Deploy from a branch**，Branch 选择 **main**，目录选择 **/(root)**，点击 Save。
5. 发布完成后，地址为 `https://你的用户名.github.io/PCFootprint/`，以 Pages 页面显示的实际地址为准。

不要把整个 `PCFootprint` 文件夹作为额外的一层上传；`index.html` 应直接位于仓库根目录。

## 本地预览

在本目录运行 `python -m http.server 8001 --bind 127.0.0.1`，打开 `http://127.0.0.1:8001/`。

## 内容维护

- `index.html`：作者、正文、链接、结果和引用。
- `styles.css`：配色、布局与手机适配。
- `assets/PCFootprint.pdf`：用户提供的正式论文。
- `assets/overview.png`、`splits.png`、`results.png`：从论文提取的图。
- Paper 按钮打开本站 PDF；正式 IEEE 链接在标题信息下方。

论文：IEEE JSTARS, vol. 19, pp. 26525–26539, 2026. DOI: 10.1109/JSTARS.2026.3715686。
图片与论文遵循 CC BY 4.0，原始数据来源见论文和 Hugging Face 数据集说明。
