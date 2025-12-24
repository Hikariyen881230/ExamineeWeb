export function generatorShowPageInfo(currentPage,totalPage,maxVisiblePage=10){
   const pages=[];
   if(totalPage<=maxVisiblePage){
    for(let i=1;i<=maxVisiblePage;i++) pages.push(i);
   }else{
      const start = Math.floor((currentPage-1)/maxVisiblePage)*maxVisiblePage+1;
      const end = Math.min(start+maxVisiblePage-1,totalPage);
      for(let i=start;i<=end;i++) pages.push(i);
      if(end<totalPage) pages.push("...");
   }
   return pages;
}