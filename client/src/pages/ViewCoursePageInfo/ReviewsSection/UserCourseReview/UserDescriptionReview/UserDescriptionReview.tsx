const UserDescriptionReview: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default UserDescriptionReview;
