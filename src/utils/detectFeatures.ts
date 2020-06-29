import { format } from "date-fns";
import platform from "platform";
import { Project } from "@/constants";

void (function detectEnv() {
  document.documentElement.classList.add("env-" + Project.environment);
  console.group("版本号");
  console.info(
    `${Project.displayName} (${Project.name.toUpperCase()})，运行在 ${
      Project.environment
    } 环境，编译时间：${format(
      Project.compileTime,
      `yyyy-MM-dd'T'HH:mm:ssXXXXX`
    )}`
  );
  console.info(
    `作者：${Project.author}；最后提交：${Project.commitSha}${
      Project.commitsSinceRelease
        ? `，超前发布版本 ${Project.commitsSinceRelease} 个提交`
        : ""
    }`
  );
  console.info("运行在：" + platform.description);
  console.groupEnd();
})();
