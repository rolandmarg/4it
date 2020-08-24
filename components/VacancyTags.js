import { useRef, useState, useEffect } from 'react';

const mapUniqueTags = (tags) => {
  const tagMap = {};

  tags.forEach((tag) => {
    tagMap[tag] = (tagMap[tag] || 0) + 1;
  });

  const array = Object.keys(tagMap).map((tag) => {
    return { value: tag, count: tagMap[tag] };
  });

  return array;
};

const sortTags = (tags) => {
  return tags.sort((a, b) => {
    if (a.count < b.count) {
      return 1;
    } else if (a.count > b.count) {
      return -1;
    } else if (a.count === b.count) {
      return a.value.length > b.value.length ? 1 : -1;
    } else {
      return 0;
    }
  });
};

export default function VacancyTags({ tags, onSelectedTagsChange }) {
  const purifiedTags = sortTags(mapUniqueTags(tags));

  const subsequentMount = useRef(false);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    if (subsequentMount.current) {
      onSelectedTagsChange(selectedTags);
    } else {
      subsequentMount.current = true;
    }
  }, [selectedTags]);

  const Onclick = (tag) => {
    return () => {
      setSelectedTags((prevTags) => {
        let newTags = [];

        if (prevTags.indexOf(tag.value) == -1) {
          newTags = [...prevTags, tag.value];
        } else {
          newTags = prevTags.filter((t) => t !== tag.value);
        }

        return newTags;
      });
    };
  };

  return (
    <div className=''>
      {purifiedTags.map((t) => {
        return (
          <button
            key={t.value}
            className='inline-block focus:outline-none'
            onClick={Onclick(t)}
          >
            <span
              className={`inline-block text-white p-1 ml-2 mt-2 mr-0 h-8 rounded-l ${
                selectedTags.indexOf(t.value) == -1
                  ? ' bg-teal-400'
                  : ' bg-teal-500'
              }`}
            >
              {t.value}
            </span>
            <span className='inline-block bg-teal-50 pt-1 px-2 h-8 rounded-r'>
              {t.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
