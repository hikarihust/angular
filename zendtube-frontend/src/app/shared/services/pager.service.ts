export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
      let totalPages: number;
      let startPage: number;
      let endPage: number;

      // calculate total pages
      totalPages = Math.ceil(totalItems / pageSize);

      if(totalPages == 1) return null;

      // ensure current page isn't out of range
      if (currentPage < 1) { 
          currentPage = 1; 
      } else if (currentPage > totalPages) { 
          currentPage = totalPages; 
      }
      
      if (totalPages <= 10) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
      } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      // calculate start and end item indexes
      let startIndex = (currentPage - 1) * pageSize;
      let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      // create an array of pages to ng-repeat in the pager control
      let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

      // return object with all pager properties required by the view
      return {
          totalItems: totalItems,       // Tổng số phần tử 
          currentPage: currentPage,     // Trang hiện tại
          pageSize: pageSize,           // Tổng số phần tử trên 1 trang
          totalPages: totalPages,       // Tổng số trang
          startPage: startPage,         // Trang bắt đầu
          endPage: endPage,             // Trang kết thúc
          startIndex: startIndex,       // Vị trí bắt đầu
          endIndex: endIndex,           // Vị trí kết thúc
          pages: pages                  // 
      };
  }
}