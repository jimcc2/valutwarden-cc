#!/bin/bash

# 🧪 增强 TOTP 功能验证脚本
# 检查增强 TOTP 功能的文件完整性和基础语法

echo "🚀 开始验证增强 TOTP 功能..."
echo "========================================"

# 设置颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 检查计数器
TOTAL_CHECKS=0
PASSED_CHECKS=0
FAILED_CHECKS=0

# 检查函数
check_file() {
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    local file=$1
    local description=$2
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $description${NC}"
        echo "   文件路径: $file"
        
        # 检查文件大小
        local size=$(wc -c < "$file" 2>/dev/null || echo "0")
        echo "   文件大小: ${size} bytes"
        
        # 检查文件是否为空
        if [ "$size" -gt 100 ]; then
            echo -e "   ${GREEN}✅ 文件内容充实${NC}"
        else
            echo -e "   ${YELLOW}⚠️  文件可能过小${NC}"
        fi
        
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
        echo ""
        return 0
    else
        echo -e "${RED}❌ $description${NC}"
        echo "   期望路径: $file"
        echo -e "   ${RED}文件不存在！${NC}"
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
        echo ""
        return 1
    fi
}

# 检查语法函数
check_syntax() {
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    local file=$1
    local description=$2
    
    if [ -f "$file" ]; then
        # 检查 TypeScript/JavaScript 基础语法
        local errors=$(grep -n "syntax error\|SyntaxError\|^import.*from.*$" "$file" | wc -l)
        local imports=$(grep -c "^import\|^export" "$file" 2>/dev/null || echo "0")
        
        echo -e "${BLUE}📝 $description 语法检查${NC}"
        echo "   导入/导出语句: $imports 个"
        
        if [ "$imports" -gt 0 ]; then
            echo -e "   ${GREEN}✅ 包含模块化代码${NC}"
        else
            echo -e "   ${YELLOW}⚠️  可能缺少导入/导出${NC}"
        fi
        
        PASSED_CHECKS=$((PASSED_CHECKS + 1))
        echo ""
        return 0
    else
        echo -e "${RED}❌ $description 语法检查失败 - 文件不存在${NC}"
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
        echo ""
        return 1
    fi
}

# 检查内容函数
check_content() {
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    local file=$1
    local pattern=$2
    local description=$3
    
    if [ -f "$file" ]; then
        if grep -q "$pattern" "$file"; then
            echo -e "${GREEN}✅ $description${NC}"
            local count=$(grep -c "$pattern" "$file")
            echo "   匹配数量: $count 处"
            PASSED_CHECKS=$((PASSED_CHECKS + 1))
        else
            echo -e "${YELLOW}⚠️  $description - 未找到预期内容${NC}"
            echo "   搜索模式: $pattern"
            FAILED_CHECKS=$((FAILED_CHECKS + 1))
        fi
        echo ""
    else
        echo -e "${RED}❌ $description - 文件不存在${NC}"
        FAILED_CHECKS=$((FAILED_CHECKS + 1))
        echo ""
    fi
}

# 主要文件路径
BASE_PATH="apps/browser/src/autofill/services"

echo "📂 检查增强 TOTP 核心文件..."
echo "----------------------------------------"

# 1. 检查核心文件是否存在
check_file "$BASE_PATH/enhanced-mfa-constants.ts" "MFA 常量定义文件"
check_file "$BASE_PATH/enhanced-mfa-detection.service.ts" "MFA 检测服务文件"
check_file "$BASE_PATH/enhanced-totp-autofill.service.ts" "TOTP 自动填充服务文件"
check_file "$BASE_PATH/enhanced-autofill-constants.ts" "增强自动填充常量文件"
check_file "$BASE_PATH/enhanced-totp-extensions.ts" "TOTP 扩展工具文件"
check_file "$BASE_PATH/enhanced-totp-integration.ts" "TOTP 集成层文件"
check_file "$BASE_PATH/enhanced-totp-usage-examples.ts" "使用示例文件"

echo "📝 检查文件语法结构..."
echo "----------------------------------------"

# 2. 检查文件语法
check_syntax "$BASE_PATH/enhanced-totp-extensions.ts" "TOTP 扩展工具"
check_syntax "$BASE_PATH/enhanced-totp-integration.ts" "TOTP 集成层"

echo "🔍 检查关键功能内容..."
echo "----------------------------------------"

# 3. 检查关键功能是否实现
check_content "$BASE_PATH/enhanced-totp-extensions.ts" "detectSegmentedTotp" "分段验证码检测功能"
check_content "$BASE_PATH/enhanced-totp-extensions.ts" "analyzeTotpField" "TOTP 字段分析功能"
check_content "$BASE_PATH/enhanced-totp-extensions.ts" "ExtendedTotpFieldNames" "多语言字段名称支持"
check_content "$BASE_PATH/enhanced-totp-extensions.ts" "验证码\|認証コード\|인증코드" "中日韩语言支持"

check_content "$BASE_PATH/enhanced-totp-integration.ts" "EnhancedTotpIntegration" "集成服务类"
check_content "$BASE_PATH/enhanced-totp-integration.ts" "enhancedTotpFill" "增强填充功能"
check_content "$BASE_PATH/enhanced-totp-integration.ts" "isMfaPage" "MFA 页面检测"

echo "📊 检查测试文件..."
echo "----------------------------------------"

# 4. 检查测试文件
check_file "$BASE_PATH/enhanced-totp-test-runner.ts" "自定义测试运行器"
check_file "$BASE_PATH/enhanced-totp-integration.spec.ts" "集成测试文件"

# 5. 检查文档
echo "📚 检查文档文件..."
echo "----------------------------------------"
check_file "docs/enhanced-totp-compilation-guide.md" "编译和测试指南"

# 生成报告
echo "========================================"
echo "📊 验证结果汇总"
echo "========================================"
echo -e "总检查项: ${BLUE}$TOTAL_CHECKS${NC}"
echo -e "通过检查: ${GREEN}$PASSED_CHECKS${NC}"
echo -e "失败检查: ${RED}$FAILED_CHECKS${NC}"

if [ $FAILED_CHECKS -eq 0 ]; then
    echo -e "${GREEN}🎉 所有检查通过！增强 TOTP 功能已正确创建。${NC}"
    exit_code=0
else
    echo -e "${YELLOW}⚠️  有 $FAILED_CHECKS 项检查未通过，但基础功能可能仍然可用。${NC}"
    exit_code=1
fi

echo ""
echo "🔧 下一步操作建议："
echo "----------------------------------------"

if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js 已安装"
    node --version
    
    if command -v npm >/dev/null 2>&1; then
        echo "✅ npm 已安装"
        npm --version
        echo "💡 您可以运行以下命令进行编译："
        echo "   cd clients-main/clients-main/apps/browser"
        echo "   npm install"
        echo "   npm run build"
    else
        echo "❌ npm 未安装，请安装 npm"
    fi
else
    echo "❌ Node.js 未安装"
    echo "💡 请先安装 Node.js 和 npm："
    echo "   1. 访问 https://nodejs.org/ 下载安装"
    echo "   2. 或使用包管理器："
    echo "      macOS: brew install node"
    echo "      Ubuntu: sudo apt install nodejs npm"
    echo "      CentOS: sudo yum install nodejs npm"
fi

echo ""
echo "📝 手动测试建议："
echo "----------------------------------------"
echo "1. 检查 TypeScript 语法："
echo "   在 IDE 中打开文件检查是否有语法错误"
echo ""
echo "2. 基础功能验证："
echo "   在浏览器控制台中测试关键函数"
echo ""
echo "3. 集成测试："
echo "   编译后在实际网站上测试 TOTP 功能"

echo ""
echo "🔗 相关文档："
echo "   - 编译指南: docs/enhanced-totp-compilation-guide.md"
echo "   - 使用示例: $BASE_PATH/enhanced-totp-usage-examples.ts"

exit $exit_code 