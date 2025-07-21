const GoogleMap = () => {
  return (
    <div className="">
      <div className="">
        <iframe
          className="w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29211.67957818739!2d90.35448319999999!3d23.766630399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1753096848521!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
