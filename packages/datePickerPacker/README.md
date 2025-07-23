# datepicker-packer

React 로 만들어진 텍스트로 날짜 입력이 가능한 기간, 단일 날짜 선택 datePicker 입니다.

## 설치

```bash
npm install datepicker-packer
# 또는
yarn add datepicker-packer
# 또는
pnpm add datepicker-packer
```

## 사용법

```tsx
import { DatePicker } from "datepicker-packer";

function App() {
  const [date, setDate] = React.useState(new Date());
  return <DatePicker value={date} onChange={setDate} />;
}
```

## 문서

- [GitHub 저장소](https://github.com/sHyunis/datePickerPacker)

## 라이선스

MIT
