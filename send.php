<?php
// Formadan kelgan ma'lumotlarni olish (hozircha faqat olish, ishlatmaymiz)
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Alert va Contact sahifaga qaytarish
echo "
<script>
    alert('Xabaringiz yuborildi!');
    window.location.href = 'contact.html'; // contact sahifaga qaytaradi
</script>
";
?>
