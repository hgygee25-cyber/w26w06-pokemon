import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/list.tsx"), 
    route("detail", "routes/detail.tsx"),
] satisfies RouteConfig;
//이거 중요함 - 아이콘(라우팅한다)(내 아이콘이랑 좀 다름)
//페이지가 세개일 경우 - route를 추가함. index는 하나만 있음
