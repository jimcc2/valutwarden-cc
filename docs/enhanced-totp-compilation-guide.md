# 🚀 增强 TOTP 功能编译和测试指南

## 📋 前置条件

### 系统要求
- Node.js 16+ 
- npm 8+ 或 yarn 1.22+
- TypeScript 4.8+
- Chrome/Firefox 浏览器（用于测试）

### 依赖检查
```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本  
npm --version

# 检查项目根目录
ls -la clients-main/clients-main/
```

## 🛠️ 编译步骤

### 1. 安装依赖
```bash
# 进入项目目录
cd clients-main/clients-main

# 安装根依赖
npm install

# 安装浏览器应用依赖
cd apps/browser
npm install
```

### 2. 编译增强 TOTP 功能
```bash
# 在 apps/browser 目录下执行

# 检查 TypeScript 配置
npx tsc --noEmit

# 编译浏览器插件
npm run build

# 或者使用开发模式（支持热重载）
npm run build:watch
```

### 3. 编译命令详解
```bash
# 完整编译（生产模式）
npm run build:prod

# 开发模式编译
npm run build:dev  

# 仅编译 TypeScript
npm run build:ts

# 编译并打包
npm run dist
```

## 🧪 测试执行

### 1. 单元测试

#### 使用 Jest 测试框架
```bash
# 运行所有测试
npm test

# 运行 autofill 相关测试
npm test -- --testPathPattern=autofill

# 运行增强 TOTP 测试（如果存在）
npm test -- --testNamePattern="Enhanced TOTP"

# 监视模式运行测试
npm test -- --watch
```

#### 使用自定义测试运行器
```bash
# 如果 Jest 测试失败，可以使用我们创建的简单测试运行器

# 1. 在浏览器中测试
# 编译项目后，在浏览器开发者控制台中运行：
# runEnhancedTotpTests()

# 2. 在 Node.js 中测试
node -e "
const { EnhancedTotpTestRunner } = require('./src/autofill/services/enhanced-totp-test-runner');
EnhancedTotpTestRunner.run().then(results => {
  console.log('Test Results:', results);
  process.exit(results.failed > 0 ? 1 : 0);
});
"
```

### 2. 集成测试

#### 在真实浏览器中测试
```bash
# 1. 编译开发版本
npm run build:dev

# 2. 加载到 Chrome
# - 打开 Chrome
# - 访问 chrome://extensions/
# - 启用开发者模式
# - 点击"加载已解压的扩展程序"
# - 选择 dist/ 目录

# 3. 测试常见网站
# 访问这些网站测试 TOTP 功能：
# - Google 2FA: https://accounts.google.com
# - GitHub 2FA: https://github.com/settings/security
# - Discord 2FA: https://discord.com
```

### 3. 手动测试清单

#### ✅ 基础功能测试
- [ ] 插件加载成功
- [ ] 无明显错误日志
- [ ] 现有 TOTP 功能仍然工作

#### ✅ 增强功能测试
- [ ] 多语言字段检测（中文网站）
- [ ] 分段验证码填充（Discord 风格）
- [ ] MFA 页面自动识别
- [ ] 填充延迟优化

#### ✅ 兼容性测试
- [ ] Chrome 浏览器
- [ ] Firefox 浏览器
- [ ] Edge 浏览器
- [ ] 不同操作系统

## 🐛 故障排除

### 常见编译问题

#### 1. TypeScript 编译错误
```bash
# 问题：找不到模块或类型声明
# 解决方案：
npm install --save-dev @types/chrome
npm install --save-dev @types/node

# 清理并重新编译
npm run clean
npm run build
```

#### 2. 依赖冲突
```bash
# 清理 node_modules
rm -rf node_modules package-lock.json
npm install

# 或使用 yarn
yarn install --frozen-lockfile
```

#### 3. 内存不足
```bash
# 增加 Node.js 内存限制
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### 测试问题

#### 1. Jest 测试失败
```bash
# 更新 Jest 配置
npm install --save-dev jest @types/jest

# 运行特定测试文件
npm test enhanced-totp-extensions.spec.ts
```

#### 2. 浏览器加载失败
```bash
# 检查 manifest.json
cat dist/manifest.json

# 验证文件结构
ls -la dist/
```

## 📝 开发工作流

### 1. 推荐的开发流程
```bash
# 1. 启动监视模式
npm run build:watch

# 2. 在另一个终端运行测试
npm test -- --watch

# 3. 在浏览器中加载开发版本
# chrome://extensions/ -> 重新加载

# 4. 测试修改
# 访问测试网站验证功能
```

### 2. 调试技巧
```typescript
// 在增强 TOTP 代码中添加调试日志
console.log('Enhanced TOTP: Analyzing field', field);

// 在浏览器控制台中启用调试模式
localStorage.setItem('bitwarden_debug_totp', 'true');

// 查看详细的 TOTP 分析信息
window._totpDebug = true;
```

### 3. 性能监控
```typescript
// 在关键函数中添加性能标记
performance.mark('totp-analysis-start');
// ... 执行 TOTP 分析
performance.mark('totp-analysis-end');
performance.measure('totp-analysis', 'totp-analysis-start', 'totp-analysis-end');
```

## 📊 测试覆盖率

### 目标覆盖率
- **行覆盖率**: > 90%
- **函数覆盖率**: > 95%
- **分支覆盖率**: > 85%

### 生成覆盖率报告
```bash
# 运行带覆盖率的测试
npm test -- --coverage

# 生成 HTML 报告
npm test -- --coverage --coverageReporters=html

# 查看报告
open coverage/index.html
```

## 🔧 自定义配置

### 1. TypeScript 配置调整
```json
// tsconfig.json 中添加路径映射
{
  "compilerOptions": {
    "paths": {
      "@enhanced-totp/*": ["src/autofill/services/enhanced-*"]
    }
  }
}
```

### 2. Webpack 配置优化
```javascript
// webpack.config.js 中添加别名
module.exports = {
  resolve: {
    alias: {
      '@enhanced-totp': path.resolve(__dirname, 'src/autofill/services/')
    }
  }
};
```

### 3. Jest 配置扩展
```json
// jest.config.js
{
  "moduleNameMapper": {
    "@enhanced-totp/(.*)": "<rootDir>/src/autofill/services/enhanced-$1"
  },
  "testMatch": [
    "**/*enhanced-totp*.test.ts",
    "**/*enhanced-totp*.spec.ts"
  ]
}
```

## 🚀 部署准备

### 1. 生产构建
```bash
# 创建生产版本
npm run build:prod

# 验证构建结果
ls -la dist/
du -sh dist/

# 压缩打包
zip -r bitwarden-enhanced-totp.zip dist/
```

### 2. 质量检查
```bash
# 运行 ESLint
npm run lint

# 运行类型检查
npm run type-check

# 运行所有测试
npm test

# 验证没有安全漏洞
npm audit
```

### 3. 版本管理
```bash
# 更新版本号
npm version patch  # 或 minor, major

# 创建 Git 标签
git tag -a v1.0.0 -m "Enhanced TOTP v1.0.0"

# 推送标签
git push origin v1.0.0
```

## 📚 相关文档

- [Bitwarden 客户端开发指南](https://bitwarden.com/help/client-dev-guide/)
- [Chrome 扩展开发文档](https://developer.chrome.com/docs/extensions/)
- [Jest 测试框架文档](https://jestjs.io/docs/getting-started)
- [TypeScript 配置指南](https://www.typescriptlang.org/tsconfig)

## 💡 最佳实践

1. **增量开发**: 每次只修改一个功能模块
2. **测试先行**: 先写测试用例，再实现功能
3. **代码审查**: 重要修改应该经过同行审查
4. **文档同步**: 及时更新文档和注释
5. **性能监控**: 定期检查功能性能影响

---

**注意**: 如果在编译或测试过程中遇到问题，请检查具体的错误信息，并参考上述故障排除部分。必要时可以回退到原始代码版本。 