import {
  CheckSquare, Circle, FileText, Home, List, Tag, BookOpen, Users, Mail
} from "react-feather";

export const menuItem = [
    {id: 1,
     url: '/admin/dashboard',
     title: 'Dashboard',
    //  height: '',
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
      url: '/admin/tags',
      title: 'Tags',
      size: '140px',
      icon: <Tag/>,
     },
     {id: 4,
      url: '/admin/contacts',
      title: 'Contacts',
      size: '140px',
      icon: <Mail/>,
     },
     {id: 4,
      url: '/admin/refers-earns',
      title: 'Refers & Earns',
      size: '140px',
      icon: <BookOpen/>,
     }
  
  
]