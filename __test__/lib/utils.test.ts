import { formatDate } from "@/lib/utils";

describe("formatDate", () => {
  it("formats a date string to zh-CN locale", () => {
    const result = formatDate("2026-05-20T08:00:00Z");
    expect(result).toContain("2026");
  });
});
