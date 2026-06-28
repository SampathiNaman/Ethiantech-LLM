import React from 'react';
import Section from '../../layouts/Section';
import Text from '../../primitives/Text';
import Input from '../../primitives/Input';
import Button from '../../primitives/Button';

const CourseFormSection = ({ title, onSave, onPublish }) => {
  const handleSubmit = (e) => { e.preventDefault(); };

  return (
    <Section className="py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Text variant="heading-md" className="text-gray-800">{title || 'Add Course'}</Text>
          <Text variant="body-sm" className="text-gray-500 mt-1">Create a new course to share your knowledge.</Text>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="md" onClick={onSave}>Save Draft</Button>
          <Button variant="primary" size="md" onClick={onPublish}>Publish Course</Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-black/5 space-y-6">
            <Text variant="heading-sm" className="text-gray-800">Basic Information</Text>
            <Input label="Course Title" id="title" placeholder="e.g. Full Stack Web Development Boot Camp" hint="Keep it descriptive and concise." />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Description</label>
              <textarea
                id="description"
                rows={5}
                placeholder="Describe what students will learn in this course..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#D62A91] focus:border-[#D62A91]"
              />
              <Text variant="meta" className="text-gray-400 mt-1">Provide a detailed overview of the curriculum and goals.</Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#D62A91]">
                  <option value="">Select category</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty Level</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#D62A91]">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border border-black/5 space-y-6">
            <Text variant="heading-sm" className="text-gray-800">Media</Text>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Thumbnail</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#D62A91] transition-colors cursor-pointer">
                  <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <Text variant="body-sm" className="text-gray-500">Click to upload or drag and drop</Text>
                  <Text variant="meta" className="text-gray-400 mt-1">PNG, JPG up to 5MB (1920x1080)</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-black/5 space-y-6">
            <Text variant="heading-sm" className="text-gray-800">Pricing</Text>
            <Input label="Regular Price ($)" id="price" type="number" placeholder="e.g. 99.99" />
            <Input label="Discounted Price ($)" id="sale-price" type="number" placeholder="e.g. 79.99" hint="Leave blank if no discount." />
          </div>
        </div>
      </form>
    </Section>
  );
};

export default CourseFormSection;
