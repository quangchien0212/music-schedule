class Tokenizer
  class << self
    DIACRITICS_MAPPING = {
      'a' => '([aắằặấầẩậẳẵạàáâãảăẫ]|&[a](acute|grave|circ);)',
      'A' => '([AẮẰẶẤẦẨẬẲẴẠÀÁÂÃẢĂẪ]|&[A](acute|grave|circ);)',
      'e' => '([eẽẹếềểễệèéêẻ]|&[e](acute|grave|circ);)',
      'E' => '([EẼẸẾỀỂỄỆÈÉÊẺ]|&[E](acute|grave|circ);)',
      'o' => '([oốồổỗộờởơớỡòóôõỏọợ]|&[o](acute|grave|circ);)',
      'O' => '([OỐỒỔỖỘỜỞƠỚỠÒÓÔÕỎỌỢ]|&[O](acute|grave|circ);)',
      'i' => '([iịìíĩỉ]|&[i](acute|grave|circ);)',
      'I' => '([IỊÌÍĨỈ]|&[I](acute|grave|circ);)',
      'u' => '([uứừửưữựụùúũủ]|&[u](acute|grave|circ);)',
      'U' => '([UỨỪỬƯỮỰỤÙÚŨỦ]|&[U](acute|grave|circ);)',
      'y' => '([yỳỷỹỵý])',
      'Y' => '([YỲỶỸỴÝ])',
      'D' => '([DĐ])',
      'd' => '([dđ])',
    }

    REGEXP_DIACRITICS = DIACRITICS_MAPPING.transform_values {|regex_str|
      Regexp.new(regex_str)
    }

    REG_NON_ALLOWED_CHARS_IN_URL = Regexp.union([
      '(',')','[',']','-','=',',',';',':','/','#','?','+','!','@','$','%','^','&','*',"\t","\r","\n","　"
    ])
    REG_SEQ_SPACES = /[\s]{2,}/

    NON_ASCII = /[^[:ascii:]]/

    def normalize(str)
      normalize_spaces(str) \
        .unicode_normalize \
        .gsub(/([.…_*\!?,:;|'\/()\[\]])/, ' \1 ') \
        .gsub(/( -|- )/, ' ') \
        .gsub(/[・•]/, ' ') \
        .downcase
    end

    def get_ascii(str)
      return str.dup if ascii?(str)

      REGEXP_DIACRITICS.inject(str.dup) {|replaced, (char, reg)|
        replaced.gsub!(reg, char)
        replaced
      }
    end

    def ascii?(str)
      NON_ASCII.match(str).nil?
    end

    def get_phrased(str, phrase_only = false)
      str.gsub(/(\w+)\s([A-z0-9])\b/) {|_|
        m = Regexp.last_match
        if phrase_only
          "#{m[1]}-#{m[2]}"
        else
          "#{m[1]} #{m[1]}-#{m[2]}"
        end
      }
    end

    # Use non-spacing marks matcher
    def get_ascii_2(str)
      str.mb_chars.unicode_normalize(:nfkd).gsub(/\p{Mn}/, '').to_s
        .gsub(REGEXP_DIACRITICS['D'], 'D')
        .gsub(REGEXP_DIACRITICS['d'], 'd')
    end

    def get_slug(str)
      return nil if str.nil?

      s = get_ascii(str)
      s.gsub!(REG_NON_ALLOWED_CHARS_IN_URL, ' ')
      s.gsub!(REG_SEQ_SPACES, ' ')
      s.strip!
      s.gsub!(' ', '-')
      s.downcase!
      s
    end

    def normalize_spaces(str)
      s = str.dup
      s.gsub!(/\p{blank}+/, ' ')
      s.gsub!('&amp;', ' ')
      s.gsub!('\r', ' ')
      s.gsub!('\n', ' ')
      s.gsub!("\r", ' ')
      s.gsub!("\n", ' ')
      s
    end

    def s2_searchable_in_ascii(str)
      return nil unless str.present?
      s = str.dup
      s.gsub!(/\n/, ' ')
      s.gsub!(/[\s\n]{2,}/, ' ')
      s.strip!
      s.downcase!

      get_ascii(s)
    end

    def s2_searchable_in_num(str)
      str.gsub(/[^0-9\n]/, '')
    end
  end
end
