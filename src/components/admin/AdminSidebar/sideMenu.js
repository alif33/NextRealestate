import {
  CheckSquare, Circle, FileText, Home, List, Tag, BookOpen, Users, Mail, Clipboard, Book
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
      url: '/admin/properties',
      title: 'Properties',
      size: '140px',
      icon: <List/>,
     },
     {id: 5,
      url: '/admin/blogs',
      title: 'Blogs',
      size: '140px',
      icon: <Clipboard/>,
     },
     {id: 6,
      url: '/admin/contacts',
      title: 'Contacts',
      size: '140px',
      icon: <Mail/>,
     },
     {id: 7,
      url: '/admin/refers-earns',
      title: 'Refers',
      size: '140px',
      icon: <BookOpen/>,
     },
     {id: 8,
      url: '/admin/reviews',
      title: 'Reviews',
      size: '140px',
      icon: <Book/>,
     }
  
  
]