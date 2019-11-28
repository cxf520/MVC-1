import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on('click', 'li', (e) => {
  let $li = $(e.currentTarget)
  const index = $li.index()
  $li.addClass('selected').siblings().removeClass('selected')
  $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
})
// 默认点击第一个
$tabBar.children().eq(0).trigger('click')
