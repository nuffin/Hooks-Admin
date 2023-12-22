import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// echarts 模块
const formRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Echarts"
		},
		children: [
			{
				path: "/echarts/waterChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/waterChart/index"))),
				meta: {
					requiresAuth: true,
					title: "水型图",
					key: "waterChart"
				}
			} as RouteObject,
			{
				path: "/echarts/columnChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/columnChart/index"))),
				meta: {
					requiresAuth: true,
					title: "柱状图",
					key: "columnChart"
				}
			} as RouteObject,
			{
				path: "/echarts/lineChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/lineChart/index"))),
				meta: {
					requiresAuth: true,
					title: "折线图",
					key: "lineChart"
				}
			} as RouteObject,
			{
				path: "/echarts/pieChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/pieChart/index"))),
				meta: {
					requiresAuth: true,
					title: "饼图",
					key: "pieChart"
				}
			} as RouteObject,
			{
				path: "/echarts/radarChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/radarChart/index"))),
				meta: {
					requiresAuth: true,
					title: "雷达图",
					key: "radarChart"
				}
			} as RouteObject,
			{
				path: "/echarts/nestedChart",
				element: lazyLoad(React.lazy(() => import("@/views/echarts/nestedChart/index"))),
				meta: {
					requiresAuth: true,
					title: "嵌套环形图",
					key: "nestedChart"
				}
			} as RouteObject
		]
	} as RouteObject
];

export default formRouter;
