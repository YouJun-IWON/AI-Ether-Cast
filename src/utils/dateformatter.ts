import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export function getDDayFormat(date: Date): string {
  const now = new Date();
  const diffTime = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `D-${diffDays}`;
}

export function getFormatRelativeDate(date: Date): string {
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 7) {
    // 7일 이상 차이나면 날짜 형식으로 반환
    return format(date, "yyyy.MM.dd");
  } else {
    // 일주일 미만 차이나는 경우 'n일 전', 'n시간 전', 'n분 전' 등으로 포맷팅
    return (
      formatDistanceToNow(date, {
        addSuffix: true,
        includeSeconds: true,
        locale: ko,
      }) + " 업로드"
    );
  }
}
