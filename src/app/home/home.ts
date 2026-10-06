import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';



interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}
interface Category {
  name: string;
  count: number;
  icon: string;
}
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  // Stats
  stats = [
    { label: 'مقالة', value: '+50', icon: 'fa-solid fa-newspaper' },
    { label: 'قارئ', value: '+10ألف', icon: 'fa-solid fa-users' },
    { label: 'تصنيفات', value: '4', icon: 'fa-solid fa-folder-open' },
    { label: 'كاتب', value: '6', icon: 'fa-solid fa-pen-nib' }
  ];
  // Categories with counts
  categories: Category[] = [
    { name: 'إضاءة', count: 3, icon: 'fa-solid fa-sun' },
    { name: 'بورتريه', count: 3, icon: 'fa-solid fa-user' },
    { name: 'مناظر طبيعية', count: 2, icon: 'fa-solid fa-mountain' },
    { name: 'تقنيات', count: 5, icon: 'fa-solid fa-sliders' },
    { name: 'معدات', count: 3, icon: 'fa-solid fa-camera' }
  ];
  // Featured Articles
  featuredArticles: Article[] = [
    {
      id: 1,
      slug: 'golden-hour-mastery',
      title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
      excerpt: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
      category: 'إضاءة',
      imageUrl: 'images/imgi_2_photo-1500835556837-99ac94a94552.jpg',
      publishDate: '15 يناير 2026',
      readTime: '8 دقائق للقراءة',
      author: {
        name: 'سالم أحمد',
        role: 'مصور طبيعة',
        avatar: 'images/imgi_3_photo-1507003211169-0a1dd7228f2d.jpg'
      }
    },
    {
      id: 2,
      slug: 'portrait-secrets',
      title: 'أسرار تصوير البورتريه: كيف تلتقط روح الشخصية',
      excerpt: 'اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.',
      category: 'بورتريه',
      imageUrl: 'images/imgi_4_photo-1507003211169-0a1dd7228f2d.jpg',
      publishDate: '12 يناير 2026',
      readTime: '6 دقائق للقراءة',
      author: {
        name: 'محمد علي',
        role: 'مصور بورتريه',
        avatar: 'images/imgi_5_photo-1500648767791-00dcc994a43e.jpg'
      }
    },
    {
      id: 3,
      slug: 'landscape-guide',
      title: 'دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف',
      excerpt: 'استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.',
      category: 'مناظر طبيعية',
      imageUrl: 'images/imgi_6_photo-1506905925346-21bda4d32df4.jpg',
      publishDate: '10 يناير 2026',
      readTime: '10 دقائق للقراءة',
      author: {
        name: 'إبراهيم حسن',
        role: 'مصور مغامرات',
        avatar: 'images/imgi_7_photo-1472099645785-5658abf4ff4e.jpg'
      }
    }
  ];
  // Latest Articles
  latestArticles: Article[] = [
    {
      id: 4,
      slug: 'camera-basics-exposure',
      title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي',
      excerpt: 'افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.',
      category: 'تقنيات',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
      publishDate: '8 يناير 2026',
      readTime: '7 دقائق للقراءة',
      author: {
        name: 'داود خالد',
        role: 'مدرب تصوير',
        avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&q=80'
      }
    },
    {
      id: 5,
      slug: 'composition-rules',
      title: 'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
      excerpt: 'تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.',
      category: 'تقنيات',
      imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
      publishDate: '5 يناير 2026',
      readTime: '9 دقائق للقراءة',
      author: {
        name: 'ليث محمود',
        role: 'فنان بصري',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80'
      }
    },
    {
      id: 6,
      slug: 'mobile-photography',
      title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
      excerpt: 'اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.',
      category: 'معدات',
      imageUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=80',
      publishDate: '3 يناير 2026',
      readTime: '8 دقائق للقراءة',
      author: {
        name: 'جمال عبدالله',
        role: 'مصور ومراجع تقني',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80'
      }
    }
  ];

}