import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Flag emojis
  const flags: Record<string, string> = {
    en: '🇬🇧',
    it: '🇮🇹'
  };

  const languageName = i18n.language === 'it' ? 'Italiano' : 'English';
  const currentFlag = flags[i18n.language] || flags.en;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-600 px-3 py-2"
        >
          <span className="text-base">{currentFlag}</span>
          <span className="hidden sm:inline">{languageName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="gap-2 cursor-pointer"
        >
          <span className="text-base">🇬🇧</span>
          {t('language.en')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('it')}
          className="gap-2 cursor-pointer"
        >
          <span className="text-base">🇮🇹</span>
          {t('language.it')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;