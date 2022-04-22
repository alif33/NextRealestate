import {
  CheckSquare, Circle, FileText, Home, List, Tag, BookOpen, Users
} from "react-feather";

export const menuItem = [
    {id: 1,
     url: '/admin/dashboard',
     title: 'Dashboard',
     height: '',
     icon: <Home/>,
     children:[
         
     ]
    },
    {id: 2,
      url: '/admin/categories',
      title: 'Categories',
      size: '140px',
      icon: <List/>,
     },
     {id: 3,
      url: '/admin/tag',
      title: 'Tag',
      size: '140px',
      icon: <Tag/>,
     },
     {id: 4,
      url: '/admin/blog',
      title: 'Blog',
      size: '140px',
      icon: <BookOpen/>,
     },
     {id: 4,
      url: '/admin/blog',
      title: 'Blog',
      size: '140px',
      icon: <BookOpen/>,
     }
  
  
]